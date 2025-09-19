import CheckoutButton from '@/components/CheckoutButton'
import ContactForm from '@/components/ContactForm'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
          PuzzleChallenge
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Test your skills in our daily puzzle contest. Win based on speed, accuracy, and strategy.
          No luck involved - pure skill competition.
        </p>
        <CheckoutButton />
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-playfair font-semibold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧩</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Daily Puzzles</h3>
            <p className="text-gray-600">
              New challenging puzzles every day designed to test your problem-solving skills.
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Speed & Accuracy</h3>
            <p className="text-gray-600">
              Winners are determined by a combination of solving speed and accuracy.
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Fair Judging</h3>
            <p className="text-gray-600">
              Scoring combines AI analysis, expert judgment, and community voting.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-playfair font-semibold text-center mb-8">
          Get in Touch
        </h2>
        <ContactForm />
      </section>
    </div>
  )
}