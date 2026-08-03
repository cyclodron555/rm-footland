import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | Real Madrid Foundation Clinics Azerbaijan',
  description: 'Privacy Policy for Real Madrid Foundation Clinics Azerbaijan',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Simple Hero Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
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
            <span className="text-foreground">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Real Madrid Foundation Clinics Azerbaijan ("we", "our", or "us") respects your privacy and is committed to protecting your personal information.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              This Privacy Policy explains how we collect, use and safeguard information when you visit our website or register for one of our football clinics.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We may collect:</p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Parent or guardian name</li>
              <li>Participant name</li>
              <li>Date of birth</li>
              <li>Contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Emergency contact details</li>
              <li>Registration information</li>
              <li>Technical information such as browser type and device information</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Your information is used to:</p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Process clinic registrations</li>
              <li>Communicate important event updates</li>
              <li>Respond to enquiries</li>
              <li>Improve our website and services</li>
              <li>Ensure participant safety during events</li>
              <li>Meet legal and administrative requirements</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Information Sharing</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do not sell personal information.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Information may be shared only with trusted partners involved in organising the clinics, including:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Footland</li>
              <li>Real Madrid Foundation</li>
              <li>Official service providers necessary for registration and event management</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              We use reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure or misuse.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">You may request:</p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 mb-8">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your data where legally permitted</li>
              <li>Withdrawal of consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              This website may use cookies to improve functionality and analyse website traffic.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-foreground">Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              For privacy-related enquiries, please contact us at:
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
