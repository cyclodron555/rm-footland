import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Terms of Service | Real Madrid Foundation Clinics Azerbaijan',
  description: 'Terms of Service for Real Madrid Foundation Clinics Azerbaijan',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Simple Hero Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-white/80">Last Updated: August 2026</p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-white/50 border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              Home
            </Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Acceptance</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              By using this website you agree to these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Purpose</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              This website provides information about Real Madrid Foundation Clinics Azerbaijan and related football development programmes.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Registrations</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Submitting a registration does not automatically guarantee participation.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Participation is subject to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Availability</li>
              <li>Successful registration</li>
              <li>Compliance with programme requirements</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All website content, including text, photographs, graphics and design, is protected by applicable copyright laws.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              The Real Madrid Foundation name and logos remain the property of their respective owners and are used with appropriate authorisation.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Website Use</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Users agree not to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Misuse the website</li>
              <li>Attempt unauthorised access</li>
              <li>Upload malicious content</li>
              <li>Interfere with website operation</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Accuracy</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              We strive to keep all information accurate, but schedules, venues, prices and programme details may change without prior notice.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">External Links</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              The website may contain links to third-party websites. We are not responsible for their content or privacy practices.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              To the maximum extent permitted by law, we are not liable for damages arising from the use of this website.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              These Terms shall be governed by the laws of the Republic of Azerbaijan.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Contact</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Questions regarding these Terms may be directed to:
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@footland.az" className="text-primary hover:text-primary/80 transition-colors">
                info@footland.az
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
