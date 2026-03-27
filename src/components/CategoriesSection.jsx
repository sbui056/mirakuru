import { Link } from 'react-router-dom'
import { menuCategories } from '../data/menu'
import { ChevronRight } from 'lucide-react'

const categoryCards = menuCategories.slice(0, 6)

export default function CategoriesSection() {
  return (
    <section className="py-28 bg-cream-dark/40 relative overflow-hidden">
      {/* Subtle decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex items-center gap-6 mb-14 reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal whitespace-nowrap">
            Categories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-charcoal/20 to-transparent" />
        </div>

        {/* Grid */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
          {categoryCards.map((cat, i) => (
            <Link
              to="/menu"
              key={cat.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group flex-shrink-0 w-40 md:w-auto`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md shadow-charcoal/5 hover:shadow-2xl hover:shadow-yellow/15 transition-all duration-700 hover:-translate-y-3">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-yellow/0 group-hover:bg-yellow/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm text-center drop-shadow-lg">{cat.name}</h3>
                  <p className="text-white/50 text-[10px] text-center mt-1">{cat.items?.length || ''} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-yellow text-charcoal px-10 py-4 rounded-full font-bold text-sm tracking-widest shadow-lg shadow-yellow/20 hover:bg-yellow-dark hover:shadow-xl hover:shadow-yellow/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            VIEW FULL MENU
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
