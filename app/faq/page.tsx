import type { Metadata } from 'next'
import FAQContent from '@/components/sections/FAQContent'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about show money, bank requirements, and how ShowMoney Pro helps Sri Lankan travelers with visa documentation.',
}

export default function FAQPage() {
  return <FAQContent />
}
