import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section className="py-28 px-6 lg:px-8 relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image collage side */}
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-charcoal/10 aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=500&h=660&fit=crop&q=80"
                    alt="Tea preparation with care"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-charcoal/10 aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1558857563-b371033873b8?w=500&h=500&fit=crop&q=80"
                    alt="Boba tea lineup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-charcoal/10 aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop&q=80"
                    alt="Japanese-inspired interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-charcoal/10 aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=660&fit=crop&q=80"
                    alt="Freshly prepared drinks"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-yellow rounded-2xl p-5 shadow-xl shadow-yellow/20 animate-float">
              <p className="font-serif text-3xl font-bold text-charcoal leading-none">Est.</p>
              <p className="font-serif text-3xl font-bold text-charcoal leading-none">2024</p>
            </div>
          </div>

          {/* Story text side */}
          <div className="reveal reveal-delay-2">
            <p className="text-yellow-dark font-bold tracking-[0.25em] uppercase text-xs mb-5">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-[1.1]">
              Where Vietnamese Heart<br />
              <span className="italic font-normal text-warm-gray">Meets Japanese Soul</span>
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-yellow" />
              <div className="w-2 h-2 rounded-full bg-yellow/50" />
            </div>

            <div className="space-y-5 text-warm-gray leading-relaxed">
              <p>
                <span className="text-charcoal font-semibold">Mirakuru means &ldquo;miracle&rdquo; in Japanese</span> — and
                that&rsquo;s exactly what we set out to create. Born from a love of Vietnamese
                coffee culture and Japanese precision, we wanted to build a space where every
                visit feels like discovering something special.
              </p>
              <p>
                Our founders grew up surrounded by the rich aromas of Vietnamese coffee shops
                and the elegant simplicity of Japanese tea ceremonies. Mirakuru is where those
                two worlds come together — in every cup, in every corner of our shop, in the
                way we welcome you through our doors.
              </p>
              <p>
                We don&rsquo;t just make drinks. We craft small miracles — using patented Teapresso
                machines that extract the deepest flavors in 60 seconds, premium tea leaves sourced
                from trusted suppliers, and recipes perfected over countless tastings. When you
                walk in, you&rsquo;re not just a customer. <span className="text-charcoal font-semibold">You&rsquo;re
                part of the miracle.</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-yellow-dark">40+</p>
                <p className="text-xs text-warm-gray/60 uppercase tracking-wider mt-1">Unique Drinks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-dark">5.0</p>
                <p className="text-xs text-warm-gray/60 uppercase tracking-wider mt-1">Star Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-dark">60s</p>
                <p className="text-xs text-warm-gray/60 uppercase tracking-wider mt-1">Perfect Brew</p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/order"
                className="inline-flex items-center gap-3 bg-yellow text-charcoal px-8 py-4 rounded-full font-bold text-sm tracking-wider shadow-lg shadow-yellow/20 hover:bg-yellow-dark hover:scale-105 active:scale-95 transition-all duration-300"
              >
                COME VISIT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
