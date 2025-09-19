import { Card } from '@/components/ui/card'

export default function Rules() {
  return (
    <div className="bg-[ivory] min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-['Playfair Display'] font-bold text-center text-[#008080] mb-10">
          Contest Rules
        </h1>

        <Card className="bg-white rounded-2xl shadow-md p-8 border border-[#FFD700]">
          {/* Disclaimer */}
          <div className="bg-[#FFF8DC] border border-[#FFD700] rounded-lg p-4 mb-8">
            <p className="text-[#8B7500] font-semibold text-center">
              ⚖️ This is a skill-based contest. No element of chance or lottery is involved.
            </p>
          </div>

          <div className="space-y-10 font-['Lora'] text-gray-700">
            {/* Entry Requirements */}
            <section>
              <h2 className="text-2xl font-['Playfair Display'] font-semibold text-[#008080] mb-4">
                Entry Requirements
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Entry fee: $10 per contest</li>
                <li>Must be 18 years or older</li>
                <li>Valid email address required</li>
                <li>One entry per person per contest</li>
              </ul>
            </section>

            {/* Judging Formula */}
            <section>
              <h2 className="text-2xl font-['Playfair Display'] font-semibold text-[#008080] mb-6">
                Judging Formula
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#F0FFFF] rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="text-3xl font-bold text-[#008080] mb-2">33.3%</div>
                  <h3 className="font-semibold text-[#006666]">AI Scoring</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Automated analysis of solution accuracy and efficiency
                  </p>
                </div>

                <div className="text-center p-6 bg-[#FFFBEB] rounded-xl shadow-sm hover:shadow-md transition border border-[#FFD700]/50">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">33.3%</div>
                  <h3 className="font-semibold text-[#8B7500]">Expert Review</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Professional judges evaluate creativity and methodology
                  </p>
                </div>

                <div className="text-center p-6 bg-[#F5F0FF] rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="text-3xl font-bold text-purple-600 mb-2">33.3%</div>
                  <h3 className="font-semibold text-purple-800">Community Vote</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Peer evaluation from qualified community members
                  </p>
                </div>
              </div>
            </section>

            {/* Contest Format */}
            <section>
              <h2 className="text-2xl font-['Playfair Display'] font-semibold text-[#008080] mb-4">
                Contest Format
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Daily contests run from 12:00 AM to 11:59 PM EST</li>
                <li>Puzzles are released at 6:00 AM EST each day</li>
                <li>Participants have unlimited time within the contest day</li>
                <li>Solutions must be submitted before the deadline</li>
                <li>Winners announced within 48 hours</li>
              </ul>
            </section>

            {/* Prizes */}
            <section>
              <h2 className="text-2xl font-['Playfair Display'] font-semibold text-[#008080] mb-4">
                Prizes
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>1st Place: 50% of total entry fees</li>
                <li>2nd Place: 25% of total entry fees</li>
                <li>3rd Place: 15% of total entry fees</li>
                <li>Platform fee: 10% (covers operations and future development)</li>
              </ul>
            </section>

            {/* Terms & Conditions */}
            <section>
              <h2 className="text-2xl font-['Playfair Display'] font-semibold text-[#008080] mb-4">
                Terms & Conditions
              </h2>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>All decisions by judges are final</li>
                <li>Participants may not collaborate or share solutions</li>
                <li>Use of AI tools to generate solutions is prohibited</li>
                <li>Violation of rules results in immediate disqualification</li>
                <li>Refunds available only in case of technical issues on our end</li>
                <li>By participating, you agree to these terms and conditions</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
