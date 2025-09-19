import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-teal text-ivory pt-16 border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <div className="space-y-5">
          <h3 className="text-3xl font-playfair font-bold relative inline-block pb-2">
            PuzzleChallenge
            <span className="absolute left-0 -bottom-1 w-16 h-0.5 bg-gold rounded"></span>
          </h3>
          <p className="text-ivory/90 leading-relaxed font-lora">
            The premier destination for skill-based puzzle competitions. 
            Test your abilities and compete with the best.
          </p>
        </div>

        {/* Social Media */}
        <div className="space-y-5">
          <h4 className="text-xl font-playfair font-semibold relative pb-1 inline-block">
            Follow Us
            <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-gold rounded"></span>
          </h4>
          <div className="flex space-x-4">
            {[
              { href: "https://www.linkedin.com/in/shourya-mittal-160028283/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
              { href: "https://youtube.com", Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full bg-ivory text-teal 
                           hover:bg-gold hover:text-teal transition-all shadow-md 
                           transform hover:scale-110 hover:shadow-lg"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-ivory/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-ivory/80">
          <p>© {new Date().getFullYear()} PuzzleChallenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
