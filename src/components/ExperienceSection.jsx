import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'

const vibeImages = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80',
    alt: 'Warm, inviting cafe interior',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1525385133512-2f3bdd620f24?w=400&h=400&fit=crop&q=80',
    alt: 'Carefully crafted tea preparation',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&q=80',
    alt: 'Silky coconut jelly drink close-up',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop&q=80',
    alt: 'Beautiful matcha macchiato',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop&q=80',
    alt: 'Refreshing mango tea',
    span: 'col-span-1 row-span-1',
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-cream-dark/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-gray to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-4">
            The Mirakuru Experience
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal mb-5">
            More Than Just a Drink
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Step inside and feel the warmth. Minimalist Japanese decor meets cozy Vietnamese
            hospitality. Whether you&rsquo;re catching up with friends, working on your laptop,
            or just treating yourself — there&rsquo;s a spot here that feels like it was made for you.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 reveal reveal-delay-1">
          {vibeImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <div className="relative w-full h-full min-h-[180px] md:min-h-[220px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Visit info strip */}
        <div className="reveal reveal-delay-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] border border-light-gray/25 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">
                We&rsquo;d Love to See You
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Pull up a chair, bring a friend, and let us make your day a little more miraculous.
                Walk-ins always welcome — no reservations needed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-3 bg-cream/80 rounded-xl px-5 py-3">
                <MapPin size={16} className="text-yellow-dark shrink-0" />
                <div>
                  <p className="font-bold text-charcoal text-xs">Garden Grove, CA</p>
                  <p className="text-warm-gray/60 text-[11px]">12901 Harbor Blvd Ste A-5</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-cream/80 rounded-xl px-5 py-3">
                <Clock size={16} className="text-yellow-dark shrink-0" />
                <div>
                  <p className="font-bold text-charcoal text-xs">Open Daily</p>
                  <p className="text-warm-gray/60 text-[11px]">8:00 AM — 10:00 PM</p>
                </div>
              </div>
            </div>
            <Link
              to="/order"
              className="bg-yellow text-charcoal px-8 py-3.5 rounded-full font-bold text-sm tracking-wider shadow-md shadow-yellow/20 hover:bg-yellow-dark hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              GET DIRECTIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
