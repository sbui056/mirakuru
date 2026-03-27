import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/menu'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth >= 768 ? 3 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const next = useCallback(() => setActive((prev) => (prev + 1) % testimonials.length), [])
  const prev = useCallback(() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const getVisible = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(active + i) % testimonials.length])
    }
    return items
  }

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Don&rsquo;t Take Our Word For It
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Hear It From Our People
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto text-sm">
            Real reviews from real customers who keep coming back.
            These are the moments that make it all worth it.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {getVisible().map((t, i) => (
              <div
                key={`${t.name}-${active}-${i}`}
                className="relative p-7 lg:p-8 rounded-[2rem] bg-white/60 backdrop-blur-sm border border-light-gray/30 transition-all duration-500 animate-fade-in-up hover:shadow-xl hover:shadow-yellow/5 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Stars at top */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow text-yellow" />
                  ))}
                </div>

                <p className="text-charcoal/80 text-sm leading-relaxed mb-8 min-h-[5rem]">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-light-gray/30">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-charcoal font-bold text-xs shadow-sm shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-charcoal text-sm">{t.name}</p>
                    {t.drink && (
                      <p className="text-yellow-dark/70 text-[11px] font-semibold">Loves: {t.drink}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/80 border border-light-gray/50 flex items-center justify-center text-warm-gray hover:bg-yellow hover:border-yellow hover:text-charcoal transition-all duration-300 hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'bg-yellow w-8' : 'bg-light-gray hover:bg-warm-gray w-3'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/80 border border-light-gray/50 flex items-center justify-center text-warm-gray hover:bg-yellow hover:border-yellow hover:text-charcoal transition-all duration-300 hover:scale-110 active:scale-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
