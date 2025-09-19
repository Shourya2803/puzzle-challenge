import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="bg-[ivory] min-h-screen px-4 py-16 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <Card className="p-12 rounded-2xl shadow-md border border-[#FFD700] bg-white">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#E0F2F2] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="text-4xl">✅</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-['Playfair Display'] font-bold text-[#008080] mb-4">
            Thank You!
          </h1>

          {/* Subtext */}
          <p className="text-lg font-['Lora'] text-gray-700 mb-8">
            Your entry has been recorded.
          </p>

          {/* Extra Info */}
          <div className="space-y-4 text-gray-600 mb-10 font-['Lora']">
            <p>See you next time!</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-[#008080] text-white font-semibold shadow-sm 
                         hover:bg-[#006666] transition"
            >
              Back to Home
            </Link>

            <Link
              href="/rules"
              className="px-6 py-3 rounded-lg border border-[#FFD700] text-[#008080] font-semibold 
                         hover:bg-[#FFF8DC] transition"
            >
              Review Rules
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
