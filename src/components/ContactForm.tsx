'use client'

import { useState } from 'react'
import { Card } from './ui/card'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="text-center p-8 rounded-2xl shadow-md">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✉️</span>
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-2 text-gray-900">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-6 font-lora">
  {"Thank you for contacting us. We'll get back to you soon."}
</p>

        <button
          onClick={() => setSuccess(false)}
          className="text-[#008080] hover:text-[#006666] font-medium transition-colors"
        >
          Send Another Message
        </button>
      </Card>
    )
  }

  return (
    <Card className="p-8 rounded-2xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2 font-lora"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all font-lora"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2 font-lora"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all font-lora"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2 font-lora"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all resize-none font-lora"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full px-6 py-3 rounded-xl text-white font-lora font-semibold 
            bg-[#008080] shadow-md transition-all duration-300 
            hover:bg-[#006666] hover:shadow-lg 
            disabled:opacity-60 disabled:cursor-not-allowed
            disabled:border disabled:border-[#FFD700]
          "
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </Card>
  )
}
