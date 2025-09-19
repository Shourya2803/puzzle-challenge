import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any
      const customerEmail = session.customer_email || session.metadata?.email

      if (customerEmail) {
        // Create or update user and increment entries count
        await prisma.user.upsert({
          where: { email: customerEmail },
          update: {
            entriesCount: {
              increment: 1,
            },
          },
          create: {
            email: customerEmail,
            entriesCount: 1,
          },
        })

        // Record the payment
        await prisma.payment.create({
          data: {
            stripePaymentId: session.payment_intent,
            userEmail: customerEmail,
            amount: session.amount_total,
            status: 'completed',
          },
        })

        console.log(`User ${customerEmail} entries incremented successfully`)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}