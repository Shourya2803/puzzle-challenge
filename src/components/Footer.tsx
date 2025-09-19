import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              PuzzleChallenge
            </h3>
            <p className="mb-4">
              The premier destination for skill-based puzzle competitions. 
              Test your abilities and compete with the best.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 PuzzleChallenge. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/rules" className="hover:text-teal-400 transition-colors">
                  Contest Rules
                </a>
              </li>
              <li>
                <a href="mailto:info@crowbarltd.com" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}