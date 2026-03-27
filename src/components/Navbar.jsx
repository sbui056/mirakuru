import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Order', path: '/order' },
  { name: 'Catering', path: '/catering' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  // On home page, navbar is transparent with white text until scrolled
  const showSolid = scrolled || !isHome
  const textColor = showSolid ? 'text-charcoal' : 'text-white'
  const activeTextColor = showSolid ? 'text-charcoal' : 'text-white'
  const inactiveTextColor = showSolid ? 'text-warm-gray' : 'text-white/70'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'glass shadow-lg shadow-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${
              showSolid ? 'bg-yellow group-hover:shadow-yellow/40' : 'bg-white/20 backdrop-blur-sm group-hover:bg-yellow'
            }`}>
              <span className={`font-serif font-bold text-lg ${showSolid ? 'text-charcoal' : 'text-white group-hover:text-charcoal'}`}>M</span>
            </div>
            <span className={`font-serif text-2xl font-bold tracking-wide transition-colors duration-300 ${textColor}`}>
              Mirakuru
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? activeTextColor
                    : `${inactiveTextColor} hover:${activeTextColor}`
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-yellow rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Order CTA (desktop) */}
          <Link
            to="/order"
            className="hidden md:inline-flex items-center gap-2 bg-yellow text-charcoal px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md shadow-yellow/20 hover:bg-yellow-dark hover:shadow-lg hover:shadow-yellow/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Order Now
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-2xl transition-all duration-300 ${
              showSolid ? 'hover:bg-cream-dark' : 'hover:bg-white/10 text-white'
            }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="glass border-t border-light-gray/30 px-6 py-5 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-yellow/15 text-charcoal'
                  : 'text-warm-gray hover:bg-yellow/8 hover:text-charcoal'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/order"
            className="block text-center mt-4 bg-yellow text-charcoal px-6 py-3.5 rounded-2xl font-bold shadow-md shadow-yellow/20 hover:bg-yellow-dark active:scale-[0.98] transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
