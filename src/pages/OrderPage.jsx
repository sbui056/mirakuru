import { useScrollReveal } from '../hooks/useScrollReveal'
import { MapPin, Phone, Clock, Car, Bike, ExternalLink } from 'lucide-react'

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: (
      <p className="text-warm-gray text-sm leading-relaxed">
        12901 Harbor Blvd Ste A-5<br />
        Garden Grove, CA 92840
      </p>
    ),
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: (
      <a href="tel:+17142348086" className="text-warm-gray text-sm hover:text-yellow-dark transition-colors duration-300 font-medium">
        (714) 234-8086
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Hours',
    content: (
      <div className="text-warm-gray text-sm space-y-1">
        <p className="flex justify-between"><span>Mon — Thu</span> <span className="text-charcoal font-semibold">8AM — 10PM</span></p>
        <p className="flex justify-between"><span>Fri — Sat</span> <span className="text-charcoal font-semibold">8AM — 11PM</span></p>
        <p className="flex justify-between"><span>Sunday</span> <span className="text-charcoal font-semibold">8AM — 10PM</span></p>
      </div>
    ),
  },
  {
    icon: Car,
    title: 'Pickup & Delivery',
    content: (
      <p className="text-warm-gray text-sm leading-relaxed">
        Order ahead for pickup via Clover, or get delivery through DoorDash and Uber Eats.
      </p>
    ),
  },
]

const orderOptions = [
  {
    title: 'Order Pickup',
    subtitle: 'via Clover',
    href: 'https://www.clover.com/online-ordering/mirakuru-garden-grove',
    icon: Car,
    primary: true,
  },
  {
    title: 'DoorDash',
    subtitle: 'Delivery',
    href: 'https://www.doordash.com/store/mirakuru-garden-grove-25417953/',
    icon: Bike,
    primary: false,
  },
  {
    title: 'Uber Eats',
    subtitle: 'Delivery',
    href: 'https://www.ubereats.com/store/mirakuru',
    icon: ExternalLink,
    primary: false,
  },
]

export default function OrderPage() {
  useScrollReveal()

  return (
    <main className="pt-20">
      {/* Hero banner */}
      <section className="relative h-64 md:h-80 overflow-hidden grain">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=500&fit=crop&q=80"
          alt="Order banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/80 z-[2]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-[3]">
          <p className="text-yellow/90 font-semibold tracking-[0.35em] uppercase text-xs mb-3 animate-fade-in">
            Place Your
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            Order
          </h1>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {infoCards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group p-7 lg:p-8 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-light-gray/25 hover:bg-white hover:shadow-2xl hover:shadow-yellow/10 hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow/20 group-hover:scale-110 transition-all duration-300">
                  <card.icon size={22} className="text-yellow-dark" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base text-charcoal mb-2">{card.title}</h3>
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="reveal mb-14 rounded-[2rem] overflow-hidden shadow-xl shadow-charcoal/5 border border-light-gray/20">
          <iframe
            title="Mirakuru location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8!2d-117.9395!3d33.7775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2883e1ffbfff%3A0x7da2c0c3b4edfc62!2s12901%20Harbor%20Blvd%20Ste%20A-5%2C%20Garden%20Grove%2C%20CA%2092840!5e0!3m2!1sen!2sus!4v1700000000000"
            className="w-full h-72 md:h-96 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Order options */}
        <div className="reveal">
          <div className="text-center mb-10">
            <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-3">
              Choose How To
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-charcoal">
              Order Your Miracle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {orderOptions.map((opt) => (
              <a
                key={opt.title}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-4 p-8 lg:p-10 rounded-[2rem] font-bold transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] ${
                  opt.primary
                    ? 'bg-yellow text-charcoal shadow-lg shadow-yellow/20 hover:bg-yellow-dark hover:shadow-xl hover:shadow-yellow/30'
                    : 'bg-white/60 border-2 border-light-gray/30 text-charcoal hover:border-yellow hover:shadow-xl hover:shadow-yellow/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  opt.primary ? 'bg-charcoal/10' : 'bg-yellow/10'
                }`}>
                  <opt.icon size={26} className={opt.primary ? 'text-charcoal' : 'text-yellow-dark'} strokeWidth={1.5} />
                </div>
                <span className="text-lg">{opt.title}</span>
                <span className={`text-xs font-normal flex items-center gap-1.5 ${opt.primary ? 'text-charcoal/60' : 'text-warm-gray'}`}>
                  {opt.subtitle} {!opt.primary && <ExternalLink size={10} />}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
