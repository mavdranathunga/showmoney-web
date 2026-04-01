const stats = [
  { value: '5,000+', label: 'Clients Served' },
  { value: '98%', label: 'Success Rate' },
  { value: '20+', label: 'Visa Types' },
  { value: '24hr', label: 'Avg. Turnaround' },
  { value: '4.9★', label: 'Client Rating' },
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-navy-800/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gold-text font-serif">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
