import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto reveal">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal p-12 md:p-20 text-center shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />

          <div className="absolute inset-0 grain opacity-40" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 px-5 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
              <span className="text-yellow text-xs font-bold tracking-[0.15em] uppercase">Open 7 Days a Week</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Your Next Favorite Drink<br />
              <span className="text-yellow italic">Is Waiting for You</span>
            </h2>
            <p className="text-white/40 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              Whether it&rsquo;s a creamy Kurimi after a long day, a bold Saigon coffee
              to kickstart your morning, or a fruity refresher just because — we&rsquo;ve
              got the drink that&rsquo;ll make your day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="bg-yellow text-charcoal px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-yellow-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-yellow/20 animate-pulse-glow"
              >
                ORDER NOW
              </Link>
              <Link
                to="/catering"
                className="bg-white/10 border border-white/15 text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white/15 hover:border-white/25 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                PLAN AN EVENT
              </Link>
            </div>

            <p className="text-white/20 text-xs mt-8 tracking-wider">
              Garden Grove, CA &middot; (714) 234-8086 &middot; @mirakuru.tea
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
