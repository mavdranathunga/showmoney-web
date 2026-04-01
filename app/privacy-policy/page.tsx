import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ShowMoney Pro — how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-navy-gradient">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="section-title text-5xl mb-4">Privacy <span className="gold-text">Policy</span></h1>
            <p className="text-slate-400 text-sm">Last updated: March 1, 2024</p>
          </div>
        </section>
        <section className="py-16 bg-navy-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-400 leading-relaxed">
            {[
              {
                title: '1. Information We Collect',
                body: 'We collect information you provide directly to us, such as when you fill out a contact form, request a service, or communicate with us. This includes: name, email address, phone number, visa type of interest, and financial information you choose to share for documentation assistance purposes.',
              },
              {
                title: '2. How We Use Your Information',
                body: 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to send transactional messages and service-related communications; and to respond to your comments and questions.',
              },
              {
                title: '3. Information Sharing',
                body: 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We do not share your financial information with any third parties. Your information is used solely to provide the services you have requested.',
              },
              {
                title: '4. Data Security',
                body: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All documents and financial information shared with us are handled with strict confidentiality.',
              },
              {
                title: '5. Data Retention',
                body: 'We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. You may request deletion of your data at any time by contacting us at hello@showmoneypro.com.',
              },
              {
                title: '6. Your Rights',
                body: 'You have the right to access, update, or delete the personal information we hold about you. You may also object to certain processing of your data. To exercise these rights, please contact us directly.',
              },
              {
                title: '7. Contact Us',
                body: 'If you have any questions about this Privacy Policy, please contact us at: hello@showmoneypro.com',
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-white font-bold text-xl mb-3 font-serif">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
