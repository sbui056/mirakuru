import { useState, useEffect } from 'react'
import { cateringDrinks } from '../data/menu'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    numDrinks: '',
    drinks: [],
    notes: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [submitted])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleDrinkToggle = (drink) => {
    setForm((prev) => ({
      ...prev,
      drinks: prev.drinks.includes(drink)
        ? prev.drinks.filter((d) => d !== drink)
        : [...prev.drinks, drink],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputClasses = "w-full px-4 py-3.5 rounded-xl bg-cream/80 border border-light-gray/40 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-yellow/40 focus:border-yellow/40 transition-all duration-300 placeholder:text-warm-gray/40"

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-scale-in max-w-md">
          <div className="w-24 h-24 bg-yellow/15 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <CheckCircle size={44} className="text-yellow-dark" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
            Request Received!
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8">
            Thank you for your catering request. Our team will get back to you within 24 hours.
            For urgent orders, please call{' '}
            <a href="tel:+17142348086" className="text-yellow-dark font-bold hover:underline">
              (714) 234-8086
            </a>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-yellow text-charcoal px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-yellow-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-yellow/20"
          >
            Submit Another Request
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero banner */}
      <section className="relative h-64 md:h-80 overflow-hidden grain">
        <img
          src="https://images.unsplash.com/photo-1525385133512-2f3bdd620f24?w=1600&h=500&fit=crop&q=80"
          alt="Catering banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/80 z-[2]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[3]">
          <p className="text-yellow/90 font-semibold tracking-[0.35em] uppercase text-xs mb-3 animate-fade-in">
            Let&rsquo;s Create a Miracle for
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            Catering
          </h1>
          <p className="text-white/50 mt-4 text-sm tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your Next Special Event
          </p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Notice */}
        <div className="reveal mb-10 p-5 rounded-2xl bg-yellow/8 border border-yellow/15 flex items-start gap-4">
          <Sparkles size={18} className="text-yellow-dark shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal/80 leading-relaxed">
            <span className="font-bold text-charcoal">Minimum 40 drinks.</span>{' '}
            We require 24 hours notice with full payment. For last-minute requests, call{' '}
            <a href="tel:+17142348086" className="font-bold text-yellow-dark hover:underline">
              (714) 234-8086
            </a>{' '}
            and we&rsquo;ll do our best!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal">
          <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] border border-light-gray/25 p-8 md:p-12 shadow-xl shadow-charcoal/5">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">
                Catering Request
              </h2>
              <p className="text-warm-gray/60 text-sm">Fill out the form and we&rsquo;ll get back to you</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  First Name *
                </label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className={inputClasses} placeholder="Jane" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  Last Name *
                </label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className={inputClasses} placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  Phone Number *
                </label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className={inputClasses} placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  Email *
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClasses} placeholder="jane@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  Pickup Date *
                </label>
                <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required className={inputClasses} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  Pickup Time *
                </label>
                <input type="time" name="pickupTime" value={form.pickupTime} onChange={handleChange} required className={inputClasses} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                  # of Drinks *
                </label>
                <input type="number" name="numDrinks" value={form.numDrinks} onChange={handleChange} min="40" required className={inputClasses} placeholder="40+" />
              </div>
            </div>

            {/* Drink selection */}
            <div className="mb-5">
              <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-3">
                Select Drinks
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cateringDrinks.map((drink) => {
                  const selected = form.drinks.includes(drink)
                  return (
                    <label
                      key={drink}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 text-sm ${
                        selected
                          ? 'bg-yellow/12 border border-yellow/25 text-charcoal font-semibold'
                          : 'bg-cream/50 border border-light-gray/25 text-warm-gray hover:bg-yellow/5 hover:border-yellow/15'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => handleDrinkToggle(drink)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4.5 h-4.5 rounded-md border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                          selected ? 'bg-yellow border-yellow-dark scale-110' : 'border-light-gray/60'
                        }`}
                        style={{ width: 18, height: 18 }}
                      >
                        {selected && (
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      {drink}
                    </label>
                  )
                })}
              </div>
              {form.drinks.length > 0 && (
                <p className="text-xs text-yellow-dark font-semibold mt-2">
                  {form.drinks.length} drink{form.drinks.length > 1 ? 's' : ''} selected
                </p>
              )}
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label className="block text-[10px] font-bold text-warm-gray/70 uppercase tracking-[0.15em] mb-2">
                Notes / Event Details
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your event, any special requests..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-yellow text-charcoal px-8 py-4 rounded-2xl font-bold text-sm tracking-widest shadow-lg shadow-yellow/20 hover:bg-yellow-dark hover:shadow-xl hover:shadow-yellow/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Send size={16} />
              SEND YOUR REQUEST
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
