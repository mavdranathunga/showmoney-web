import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-900 flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <div className="text-8xl font-bold gold-text font-serif mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
