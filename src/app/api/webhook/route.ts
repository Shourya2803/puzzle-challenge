import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  // 1️⃣ Read raw body (needed for Stripe signature verification)
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    // console.error('❌ No Stripe signature found in headers')
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    // console.error('❌ STRIPE_WEBHOOK_SECRET not configured')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  let event: any

  try {
    // 2️⃣ Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
    // console.log('✅ Stripe webhook verified')
  } catch (err) {
    // console.error('❌ Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // console.log('Webhook event type:', event.type)

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any
    // console.log('Full session object:', JSON.stringify(session, null, 2))

    // 3️⃣ Ensure email exists
    const customerEmail = session.customer_email || session.metadata?.email
    if (!customerEmail) {
      // console.error('❌ No customer email found in session')
      return NextResponse.json({ error: 'No customer email found' }, { status: 400 })
    }

    try {
      // console.log(`Processing payment for email: ${customerEmail}`)

      // 4️⃣ Upsert user
      const updatedUser = await prisma.user.upsert({
        where: { email: customerEmail },
        update: { entriesCount: { increment: 1 } },
        create: { email: customerEmail, entriesCount: 1 },
      })
      // console.log('User after upsert:', updatedUser)

      // 5️⃣ Record payment
      const payment = await prisma.payment.create({
        data: {
          stripePaymentId: session.payment_intent || session.id,
          userEmail: customerEmail,
          amount: session.amount_total || 1000,
          status: 'completed',
        },
      })
      // console.log('Payment recorded:', payment)

      return NextResponse.json({
        received: true,
        user: updatedUser,
        payment,
      })
    } catch (dbError) {
      // console.error('❌ Database error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }
  }

  // 6️⃣ Ignore other event types
  // console.log('Webhook event ignored:', event.type)
  return NextResponse.json({ received: true })
}
