import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dilshan Perera',
    location: 'Colombo',
    visa: 'Schengen (France)',
    rating: 5,
    text: 'ShowMoney Pro was a lifesaver for my Schengen visa. The proof-of-funds letter they prepared was exactly what the embassy was looking for. Approved in 10 days!',
    avatar: 'DP',
  },
  {
    name: 'Anjali Rajapaksa',
    location: 'Kandy',
    visa: 'US Tourist Visa (B-2)',
    rating: 5,
    text: 'I was worried about my US visa after a previous rejection. The team help me consolidate my papers and present my case clearly. Highly recommended!',
    avatar: 'AR',
  },
  {
    name: 'Kasun Silva',
    location: 'Negombo',
    visa: 'Japan Tourist Visa',
    rating: 5,
    text: 'Super fast! Submitted my requirements Monday evening, received my documents by Wednesday. The Japan embassy accepted everything without any questions. Highly recommend!',
    avatar: 'AC',
  },
  {
    name: 'Chamara Mendis',
    location: 'Galle',
    visa: 'UK Standard Visitor',
    rating: 5,
    text: 'Very professional service. They even reminded me about additional documents I would have missed. The document review service alone was a game-changer. Visa approved!',
    avatar: 'CM',
  },
  {
    name: 'Lakshani Fernando',
    location: 'Kurunegala',
    visa: 'Australia Tourist (600)',
    rating: 5,
    text: 'I didn\'t know how much show money I needed or how to present it properly. ShowMoney Pro handled everything and explained each step clearly. First-time applicant, first-time approval!',
    avatar: 'LF',
  },
  {
    name: 'Ranjith Tennakoon',
    location: 'Matara',
    visa: 'Canada Tourist Visa',
    rating: 5,
    text: 'Used them for my Canada visa. The consultation was eye-opening — they caught gaps in my application I wasn\'t aware of. Comprehensive, fast, and trustworthy team.',
    avatar: 'RT',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background border-t border-card-border border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Trusted by <span className="gold-text">Sri Lankan Travelers</span> Worldwide
          </h2>
          <p className="text-muted max-w-2xl mx-auto font-medium">
            Over 5,000 Sri Lankan travelers have trusted us with their visa documentation. Here's what they say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 flex flex-col gap-4 hover:border-gold-500/20 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-background font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.location}</div>
                  </div>
                </div>
                <Quote size={18} className="text-gold-500/40 shrink-0 mt-1" />
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="pt-3 border-t border-card-border">
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
