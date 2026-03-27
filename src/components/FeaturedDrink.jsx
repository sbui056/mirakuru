import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function FeaturedDrink() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-charcoal relative overflow-hidden grain">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-[3]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Drink image */}
          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-yellow/10 border-4 border-yellow/20">
                <img
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&h=800&fit=crop&q=80"
                  alt="Mirukuru Matcha Milk Tea — our signature drink"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Price tag */}
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-yellow rounded-2xl px-5 py-3 shadow-xl shadow-yellow/30">
                <p className="text-charcoal font-bold text-xl">$12.99</p>
              </div>
              {/* Floating accent */}
              <div className="absolute top-4 -left-4 md:top-8 md:-left-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2 animate-float">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow text-yellow" />)}
                </div>
                <p className="text-white/60 text-[10px] mt-0.5">Best Seller</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
              <span className="text-yellow text-[10px] font-bold tracking-[0.2em] uppercase">Fan Favorite</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Mirukuru Matcha<br />
              <span className="italic font-normal text-yellow">Milk Tea</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed max-w-lg mb-8">
              The drink that started it all. Premium ceremonial-grade matcha whisked to
              velvety perfection, layered with our house-made kurimi cream, and sweetened
              just enough to let the tea sing. Bold, smooth, and utterly addictive — one
              sip and you&rsquo;ll understand why it&rsquo;s the one everyone talks about.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {['Ceremonial Matcha', 'Kurimi Cream', 'House Recipe', 'Iced or Hot'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-3 bg-yellow text-charcoal px-10 py-4 rounded-full font-bold text-sm tracking-wider shadow-lg shadow-yellow/25 hover:bg-yellow-dark hover:scale-105 active:scale-95 transition-all duration-300"
            >
              SEE FULL MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
