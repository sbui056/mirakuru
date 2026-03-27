import { useState, useEffect } from 'react'
import { menuCategories } from '../data/menu'
import { Search } from 'lucide-react'

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = [
    { id: 'all', label: 'All' },
    ...menuCategories.map((c) => ({ id: c.id, label: c.name })),
  ]

  const filtered =
    activeFilter === 'all'
      ? menuCategories
      : menuCategories.filter((c) => c.id === activeFilter)

  // Apply search within filtered categories
  const searchFiltered = searchQuery.trim()
    ? filtered.map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : filtered

  // Re-run reveal observer whenever content changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )

    // Small delay to let React render new elements
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [activeFilter, searchQuery])

  // Count total items
  const totalItems = searchFiltered.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <main className="pt-20">
      {/* Hero banner */}
      <section className="relative h-64 md:h-80 overflow-hidden grain">
        <img
          src="https://images.unsplash.com/photo-1558857563-b371033873b8?w=1600&h=500&fit=crop&q=80"
          alt="Menu banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/80 z-[2]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-[3]">
          <p className="text-yellow/90 font-semibold tracking-[0.35em] uppercase text-xs mb-3 animate-fade-in">
            Explore Our
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            Menu
          </h1>
        </div>
      </section>

      {/* Filter & search bar */}
      <section className="sticky top-20 z-30 glass border-b border-light-gray/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-gray/50" />
              <input
                type="text"
                placeholder="Search drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-cream-dark/60 border border-light-gray/30 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-yellow/40 focus:border-yellow/40 w-44 focus:w-56 transition-all duration-300"
              />
            </div>

            {/* Filter pills */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeFilter === f.id
                      ? 'bg-yellow text-charcoal shadow-md shadow-yellow/20'
                      : 'bg-white/50 text-warm-gray hover:bg-yellow/10 hover:text-charcoal border border-light-gray/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Count badge */}
            <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-cream-dark/60 text-xs text-warm-gray font-semibold">
              {totalItems} items
            </span>
          </div>
        </div>
      </section>

      {/* Menu items */}
      <section className="py-14 max-w-7xl mx-auto px-6 lg:px-8">
        {searchFiltered.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-4xl mb-4">🍵</p>
            <p className="text-warm-gray font-semibold">No drinks found</p>
            <p className="text-warm-gray/60 text-sm mt-1">Try a different search or filter</p>
          </div>
        ) : (
          searchFiltered.map((category) => (
            <div key={category.id} className="mb-16 last:mb-0">
              <div className="flex items-center gap-6 mb-8 reveal">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                    {category.name}
                  </h2>
                  <p className="text-warm-gray/60 text-xs mt-1">{category.description}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-charcoal/10 to-transparent" />
                <span className="text-warm-gray/50 text-xs font-semibold bg-cream-dark/60 px-3 py-1 rounded-full">
                  {category.items.length}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                {category.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} group`}
                  >
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-light-gray/20 hover:shadow-2xl hover:shadow-yellow/10 hover:-translate-y-2 transition-all duration-500">
                      {/* Tag */}
                      {item.tag && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-full bg-yellow/90 text-charcoal text-[10px] font-bold tracking-wider uppercase shadow-sm">
                            {item.tag}
                          </span>
                        </div>
                      )}

                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm text-charcoal leading-snug mb-2 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-yellow-dark font-extrabold text-base">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="w-7 h-7 rounded-full bg-yellow/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow/20">
                            <span className="text-yellow-dark text-xs">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  )
}
