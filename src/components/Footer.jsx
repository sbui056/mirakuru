import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Mail, ChevronUp } from 'lucide-react'

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socialLinks = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/mirakuru.tea/', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/mirakuru.tea/', label: 'Facebook' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@mirakuru.tea', label: 'TikTok' },
  { icon: () => <Mail size={18} />, href: 'mailto:mirakurutea@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-charcoal text-white/80 relative overflow-hidden">
      {/* Gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top section — CTA */}
        <div className="text-center mb-16 pb-16 border-b border-white/5">
          <p className="text-yellow/60 text-xs tracking-[0.3em] uppercase font-bold mb-3">#MIRAKURUTEA</p>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-6">Follow Us on Social</h3>
          <div className="flex gap-3 justify-center">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-yellow hover:text-charcoal hover:border-yellow hover:scale-110 active:scale-90 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-yellow rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-charcoal text-base">M</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">Mirakuru</span>
            </div>
            <p className="text-xs leading-relaxed text-white/40 max-w-[240px]">
              &ldquo;Miracle&rdquo; in Japanese. Vietnamese-owned, blending Vietnamese creativity
              with Japanese-inspired simplicity and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Order', path: '/order' },
                { name: 'Catering', path: '/catering' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/40 hover:text-yellow transition-all duration-300 hover:tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.2em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="text-yellow/60 mt-0.5 shrink-0" />
                <span className="text-white/40 text-xs leading-relaxed">
                  12901 Harbor Blvd Ste A-5,<br />
                  Garden Grove, CA 92840
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={14} className="text-yellow/60 shrink-0" />
                <a href="tel:+17142348086" className="text-white/40 text-xs hover:text-yellow transition-colors">
                  (714) 234-8086
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={14} className="text-yellow/60 shrink-0" />
                <a href="mailto:mirakurutea@gmail.com" className="text-white/40 text-xs hover:text-yellow transition-colors">
                  mirakurutea@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.2em] mb-6">
              Hours
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                { day: 'Mon — Thu', hours: '8:00 AM — 10:00 PM' },
                { day: 'Fri — Sat', hours: '8:00 AM — 11:00 PM' },
                { day: 'Sunday', hours: '8:00 AM — 10:00 PM' },
              ].map((h) => (
                <li key={h.day} className="flex items-center gap-3">
                  <Clock size={12} className="text-yellow/40 shrink-0" />
                  <div>
                    <p className="text-white/50 font-semibold">{h.day}</p>
                    <p className="text-white/30">{h.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/25 tracking-wider">
            &copy; 2025 MIRAKURU. All rights reserved. Moshi Moshi, Miracle Is Coming!
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
