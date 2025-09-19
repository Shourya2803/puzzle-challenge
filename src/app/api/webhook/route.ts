import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: 'Invalid signature', details: errorMessage }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_email || session.metadata?.email;
    if (!customerEmail) {
      return NextResponse.json({ error: 'No customer email found' }, { status: 400 });
    }

    try {
      // Upsert user
      const updatedUser = await prisma.user.upsert({
        where: { email: customerEmail },
        update: { entriesCount: { increment: 1 } },
        create: { email: customerEmail, entriesCount: 1 },
      });

      // Record payment
      const payment = await prisma.payment.create({
        data: {
          stripePaymentId: typeof session.payment_intent === 'string' 
    ? session.payment_intent 
    : session.id,
          userEmail: customerEmail,
          amount: session.amount_total || 1000,
          status: 'completed',
        },
      });

      return NextResponse.json({
        received: true,
        user: updatedUser,
        payment,
      });
    } catch (dbError) {
      const dbErrorMessage = dbError instanceof Error ? dbError.message : 'Unknown database error';
      return NextResponse.json({ error: 'Database error', details: dbErrorMessage }, { status: 500 });
    }
  }

  // Ignore other event types
  return NextResponse.json({ received: true });
}
