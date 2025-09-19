import Stripe from 'stripe'

// Ensure the Stripe secret key is set
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

// Initialize Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  // Optional: strict mode helps catch type mismatches
  typescript: true,
})
