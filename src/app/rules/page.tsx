import { Card } from '@/components/ui/card'

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8">
          Contest Rules
        </h1>
        
        <Card className="mb-8">
          <div className="bg-gold-100 border border-gold-300 rounded-lg p-4 mb-6">
            <p className="text-gold-800 font-semibold text-center">
              ⚖️ This is a skill-based contest. No element of chance or lottery is involved.
            </p>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Entry Requirements</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Entry fee: $10 per contest</li>
                <li>• Must be 18 years or older</li>
                <li>• Valid email address required</li>
                <li>• One entry per person per contest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Judging Formula</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">33.3%</div>
                  <h3 className="font-semibold text-teal-800">AI Scoring</h3>
                  <p className="text-sm text-teal-700 mt-2">
                    Automated analysis of solution accuracy and efficiency
                  </p>
                </div>
                
                <div className="text-center p-4 bg-gold-50 rounded-lg">
                  <div className="text-3xl font-bold text-gold-600 mb-2">33.3%</div>
                  <h3 className="font-semibold text-gold-800">Expert Review</h3>
                  <p className="text-sm text-gold-700 mt-2">
                    Professional judges evaluate creativity and methodology
                  </p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">33.3%</div>
                  <h3 className="font-semibold text-purple-800">Community Vote</h3>
                  <p className="text-sm text-purple-700 mt-2">
                    Peer evaluation from qualified community members
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Contest Format</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Daily contests run from 12:00 AM to 11:59 PM EST</li>
                <li>• Puzzles are released at 6:00 AM EST each day</li>
                <li>• Participants have unlimited time within the contest day</li>
                <li>• Solutions must be submitted before the deadline</li>
                <li>• Winners announced within 48 hours</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Prizes</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 1st Place: 50% of total entry fees</li>
                <li>• 2nd Place: 25% of total entry fees</li>
                <li>• 3rd Place: 15% of total entry fees</li>
                <li>• Platform fee: 10% (covers operations and future development)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Terms & Conditions</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• All decisions by judges are final</li>
                <li>• Participants may not collaborate or share solutions</li>
                <li>• Use of AI tools or external assistance is prohibited</li>
                <li>• Violation of rules results in immediate disqualification</li>
                <li>• Refunds available only in case of technical issues on our end</li>
                <li>• By participating, you agree to these terms and conditions</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}