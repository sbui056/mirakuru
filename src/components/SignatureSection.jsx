import { Link } from 'react-router-dom'
import { signatures } from '../data/menu'

export default function SignatureSection() {
  return (
    <section className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text side */}
        <div className="reveal">
          <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-5">
            What We&rsquo;re Known For
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-[1.1]">
            Mirakuru<br />
            <span className="font-serif italic font-normal text-warm-gray">Signatures</span>
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-yellow" />
            <div className="w-2 h-2 rounded-full bg-yellow/50" />
          </div>
          <p className="text-warm-gray leading-relaxed text-base max-w-md mb-4">
            These are the drinks people drive across town for. The ones your friends
            won&rsquo;t stop talking about. The ones you&rsquo;ll crave at 2pm on a Tuesday.
          </p>
          <p className="text-warm-gray/70 leading-relaxed text-sm max-w-md mb-10">
            Every signature is made with premium tea leaves, brewed on our patented Teapresso
            machines, and finished by hand. No shortcuts, no compromises — just pure,
            drinkable happiness.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 text-charcoal font-bold text-sm tracking-wide group"
          >
            <span className="border-b-2 border-yellow pb-0.5 group-hover:border-yellow-dark transition-colors">
              See What Else We Make
            </span>
            <span className="w-8 h-8 rounded-full bg-yellow/15 flex items-center justify-center group-hover:bg-yellow/25 group-hover:translate-x-1 transition-all duration-300">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Cards side */}
        <div className="grid grid-cols-3 gap-4 md:gap-5">
          {signatures.map((sig, i) => (
            <Link
              to="/menu"
              key={sig.name}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer block`}
              style={{ marginTop: i === 1 ? '-2rem' : '0' }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-charcoal/5 hover:shadow-2xl hover:shadow-yellow/15 transition-all duration-700 hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={sig.image}
                    alt={sig.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">{sig.price}</p>
                  <h3 className="text-white font-bold text-xs md:text-sm leading-snug mb-1">{sig.name}</h3>
                  <p className="text-white/40 text-[10px] leading-snug hidden md:block">{sig.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
