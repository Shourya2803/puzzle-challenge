import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">✅</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your entry has been recorded.
          </p>
          
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              You'll receive a confirmation email shortly with your contest details.
            </p>
            <p>
              The daily puzzle will be available at 6:00 AM EST. Good luck!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="btn-primary inline-block text-center"
            >
              Back to Home
            </Link>
            <Link 
              href="/rules" 
              className="btn-secondary inline-block text-center"
            >
              Review Rules
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}