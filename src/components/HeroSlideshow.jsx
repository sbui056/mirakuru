import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=1920&h=1080&fit=crop&q=80',
    alt: 'Boba tea drinks lineup',
  },
  {
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&h=1080&fit=crop&q=80',
    alt: 'Refreshing fruit tea',
  },
  {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop&q=80',
    alt: 'Artisan coffee',
  },
  {
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1920&h=1080&fit=crop&q=80',
    alt: 'Japanese tea ceremony',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full h-screen overflow-hidden grain">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-charcoal/75 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30 z-[2]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[3]">
        <div className="animate-fade-in-up max-w-3xl">
          <p className="text-yellow/80 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
            Garden Grove, California
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-none">
            Mirakuru
          </h1>
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-12 h-px bg-yellow/50" />
            <div className="w-2 h-2 rounded-full bg-yellow" />
            <div className="w-12 h-px bg-yellow/50" />
          </div>
          <p className="text-white/70 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-3">
            Where Vietnamese warmth meets Japanese elegance.
            Handcrafted teas, artisan coffees, and a whole lot of good vibes.
          </p>
          <p className="text-white/40 text-sm italic">
            Moshi Moshi — your miracle awaits.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/menu"
            className="bg-yellow text-charcoal px-10 py-4 rounded-full font-bold text-sm tracking-wider shadow-lg shadow-yellow/25 hover:bg-yellow-dark hover:shadow-xl hover:shadow-yellow/35 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            EXPLORE OUR MENU
          </Link>
          <Link
            to="/order"
            className="border-2 border-white/25 text-white px-10 py-4 rounded-full font-bold text-sm tracking-wider hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
          >
            ORDER FOR PICKUP
          </Link>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-300 hover:scale-110 active:scale-90 z-[3]"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-300 hover:scale-110 active:scale-90 z-[3]"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2.5 z-[3]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              i === current
                ? 'w-10 bg-yellow'
                : 'w-3 bg-white/25 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-float z-[3]">
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
