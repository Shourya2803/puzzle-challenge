'use client'

import { useState } from 'react'

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'user@example.com', // In real app, get from form or auth
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="
        bg-[#008080] text-white font-['Lora'] text-lg px-8 py-4 rounded-2xl shadow-md 
        transition-all duration-300 ease-in-out
        hover:bg-[#006666] hover:shadow-lg
        disabled:opacity-60 disabled:cursor-not-allowed
        disabled:border disabled:border-[#FFD700]
      "
    >
      {loading ? 'Processing...' : 'Enter Contest - $10'}
    </button>
  )
}
