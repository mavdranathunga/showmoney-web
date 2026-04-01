import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Santos',
    location: 'Manila',
    visa: 'Schengen (France)',
    rating: 5,
    text: 'I was so nervous about my Schengen application, but ShowMoney Pro walked me through everything. Got approved in just 2 weeks! Their proof-of-funds letter was professional and exactly what the embassy wanted.',
    avatar: 'MS',
  },
  {
    name: 'Jose Reyes',
    location: 'Cebu City',
    visa: 'US Tourist Visa (B-2)',
    rating: 5,
    text: 'Had my US visa rejected twice before. ShowMoney Pro reviewed my full financial package, helped me present my savings properly, and I finally got approved! Worth every peso.',
    avatar: 'JR',
  },
  {
    name: 'Anna Cruz',
    location: 'Davao',
    visa: 'Japan Tourist Visa',
    rating: 5,
    text: 'Super fast! Submitted my requirements Monday evening, received my documents by Wednesday. The Japan embassy accepted everything without any questions. Highly recommend!',
    avatar: 'AC',
  },
  {
    name: 'Carlo Mendoza',
    location: 'Quezon City',
    visa: 'UK Standard Visitor',
    rating: 5,
    text: 'Very professional service. They even reminded me about additional documents I would have missed. The document review service alone was a game-changer. Visa approved!',
    avatar: 'CM',
  },
  {
    name: 'Liza Flores',
    location: 'Iloilo',
    visa: 'Australia Tourist (600)',
    rating: 5,
    text: 'I didn\'t know how much show money I needed or how to present it properly. ShowMoney Pro handled everything and explained each step clearly. First-time applicant, first-time approval!',
    avatar: 'LF',
  },
  {
    name: 'Ricky Tan',
    location: 'Makati',
    visa: 'Canada Tourist Visa',
    rating: 5,
    text: 'Used them for my Canada visa. The consultation was eye-opening — they caught gaps in my application I wasn\'t aware of. Comprehensive, fast, and trustworthy team.',
    avatar: 'RT',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">Client Stories</span>
          <h2 className="section-title mb-4">
            Real People,{' '}
            <span className="gold-text">Real Approvals</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Over 5,000 Filipino travelers have trusted us with their visa documentation. Here's what they say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 flex flex-col gap-4 hover:border-gold-500/20 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-navy-900 font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.location}</div>
                  </div>
                </div>
                <Quote size={18} className="text-gold-500/40 shrink-0 mt-1" />
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="pt-3 border-t border-white/5">
                <span className="inline-flex items-center gap-1.5 text-xs text-gold-500/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.visa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
