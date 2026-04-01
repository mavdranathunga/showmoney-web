'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

// WhatsApp icon SVG
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// Messenger icon SVG
const MessengerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.259 5.887-3.259-6.559 6.863z" />
  </svg>
)

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Options Panel */}
      {isOpen && (
        <div className="glass-card border border-card-border p-4 w-56 shadow-2xl shadow-black/50 animate-slide-up">
          <p className="text-white font-semibold text-sm mb-1">Chat with us!</p>
          <p className="text-slate-400 text-xs mb-4">We typically reply within minutes.</p>
          <div className="flex flex-col gap-2">
            <a
              id="floating-cta-whatsapp"
              href="https://wa.me/94702345678?text=Hi%2C%20I%27m%20interested%20in%20your%20Show%20Money%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-sm font-medium"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              id="messenger-chat-link"
              href="https://m.me/showmoneypro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#0084FF]/10 border border-[#0084FF]/20 text-[#0084FF] hover:bg-[#0084FF]/20 transition-all text-sm font-medium"
            >
              <MessengerIcon />
              Messenger
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        id="floating-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-slate-700 text-white rotate-0'
            : 'bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 hover:scale-110'
        }`}
        style={{ boxShadow: isOpen ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(245,158,11,0.4)' }}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
