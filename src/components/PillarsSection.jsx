import { Leaf, Coffee, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Leaf,
    title: 'Real Ingredients, Real Flavor',
    description:
      "No powders, no artificial shortcuts. We source premium tea leaves and fresh ingredients from suppliers we actually trust. You can taste the difference — and so will you.",
    stat: '100%',
    statLabel: 'Premium Sourced',
  },
  {
    icon: Coffee,
    title: '60-Second Teapresso Magic',
    description:
      "Our patented machines pull the deepest, richest flavors from every leaf in just one minute. It's the reason our tea hits different — science meets soul.",
    stat: '60s',
    statLabel: 'To Perfection',
  },
  {
    icon: Heart,
    title: 'You\'re Family Here',
    description:
      "We remember your order. We ask about your day. We genuinely care that every drink makes you smile. That's not a brand promise — it's just how we are.",
    stat: '5.0',
    statLabel: 'Star Reviews',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-28 px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-20 reveal">
        <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-4">
          The Mirakuru Difference
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal mb-4">
          Why People Keep Coming Back
        </h2>
        <p className="text-warm-gray max-w-lg mx-auto text-sm">
          It&rsquo;s not just the drinks (although those are pretty incredible).
          It&rsquo;s how everything feels when you walk through our doors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`reveal reveal-delay-${i + 1} group relative p-8 lg:p-10 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-light-gray/40 hover:bg-white hover:shadow-2xl hover:shadow-yellow/10 transition-all duration-700 hover:-translate-y-3 text-center overflow-hidden`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-16 h-16 bg-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-7 group-hover:bg-yellow/20 group-hover:scale-110 group-hover:rounded-xl transition-all duration-500">
              <pillar.icon size={26} className="text-yellow-dark" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg text-charcoal mb-3">{pillar.title}</h3>
            <p className="text-warm-gray text-sm leading-relaxed mb-6">{pillar.description}</p>

            <div className="pt-5 border-t border-light-gray/40">
              <p className="text-2xl font-bold text-yellow-dark">{pillar.stat}</p>
              <p className="text-xs text-warm-gray/70 uppercase tracking-wider mt-0.5">{pillar.statLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
