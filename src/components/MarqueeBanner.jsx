export default function MarqueeBanner() {
  const items = [
    'Welcome to Mirakuru',
    'Kurimi Milk Tea',
    'Matcha Macchiato',
    'Saigon Egg Coffee',
    'Fresh Fruit Tea',
    'Coconut Jelly',
    'Brown Boba',
    'Handcrafted Daily',
    'Garden Grove, CA',
    'Open 7 Days a Week',
  ]

  const repeated = [...items, ...items]

  return (
    <div className="bg-yellow overflow-hidden py-3.5 relative">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-8 text-charcoal/60 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-8">
            {item}
            <span className="w-1 h-1 rounded-full bg-charcoal/25" />
          </span>
        ))}
      </div>
    </div>
  )
}
