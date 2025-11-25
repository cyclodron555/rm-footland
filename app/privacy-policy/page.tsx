import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Cyclodron Photography",
  description:
    "Read the Cyclodron Photography Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or book a shoot.",
  openGraph: {
    title: "Privacy Policy | Cyclodron Photography",
    description:
      "Read the Cyclodron Photography Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or book a shoot.",
    url: "https://cyclodron.com/privacy-policy",
    siteName: "Cyclodron Photography",
    images: [
      {
        url: "https://cyclodron.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cyclodron Photography Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Cyclodron Photography",
    description:
      "Read the Cyclodron Photography Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or book a shoot.",
    images: ["https://cyclodron.com/logo.png"],
  },
  alternates: {
    canonical: "https://cyclodron.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> November 25, 2025
              </p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">1. Introduction</h2>
                <p>
                  Cyclodron Photography ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our photography services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the site or use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Book a photography session or service</li>
                  <li>Contact us through our website or email</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Interact with us on social media platforms</li>
                </ul>
                <p className="mt-4">This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Payment and billing information</li>
                  <li>Event details (date, location, special requests)</li>
                  <li>Photographs and images from your session</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your device,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Referral sources and website navigation patterns</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our photography services</li>
                  <li>Process bookings, payments, and deliver photographs</li>
                  <li>Communicate with you about your session, updates, and inquiries</li>
                  <li>Send promotional materials and marketing communications (with your consent)</li>
                  <li>Improve our website, services, and customer experience</li>
                  <li>Analyze usage patterns and optimize our business operations</li>
                  <li>Comply with legal obligations and protect our legal rights</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">4. Photography and Image Usage</h2>
                <p>
                  We take photographs as part of our professional services. Unless you explicitly opt out, we may use
                  photographs from your session for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Portfolio and promotional purposes on our website and social media</li>
                  <li>Marketing materials, advertisements, and publications</li>
                  <li>Display in our studio or at exhibitions</li>
                </ul>
                <p className="mt-4">
                  If you prefer your images not be used publicly, please notify us in writing before or immediately
                  after your session. We respect your privacy and will honor such requests.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">5. Data Storage and Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure.
                </p>
                <p>
                  Your photographs and personal data are stored on secure servers and cloud storage platforms with
                  industry-standard encryption. We retain your information only for as long as necessary to fulfill the
                  purposes outlined in this policy or as required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">6. Sharing Your Information</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist with
                    payment processing, cloud storage, email delivery, and website hosting
                  </li>
                  <li>
                    <strong className="text-foreground">Legal Requirements:</strong> When required by law, court order,
                    or governmental authority
                  </li>
                  <li>
                    <strong className="text-foreground">Business Transfers:</strong> In connection with a merger, sale,
                    or acquisition of our business
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information to third parties for their marketing
                  purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  7. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                  traffic, and understand user preferences. You can control cookie settings through your browser, but
                  disabling cookies may limit certain website functionalities.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">8. Your Privacy Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Access:</strong> Request access to the personal information we
                    hold about you
                  </li>
                  <li>
                    <strong className="text-foreground">Correction:</strong> Request correction of inaccurate or
                    incomplete information
                  </li>
                  <li>
                    <strong className="text-foreground">Deletion:</strong> Request deletion of your personal information
                  </li>
                  <li>
                    <strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications
                  </li>
                  <li>
                    <strong className="text-foreground">Data Portability:</strong> Request a copy of your data in a
                    portable format
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites and social media platforms. We are not
                  responsible for the privacy practices or content of these external sites. We encourage you to review
                  their privacy policies before providing any personal information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have inadvertently collected information from a minor,
                  please contact us immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  11. Changes to This Privacy Policy
                </h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this
                  page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay
                  informed about how we protect your information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">12. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <div className="mt-4 rounded-lg bg-muted/10 p-6 border border-border">
                  <p className="font-semibold text-foreground">Cyclodron Photography</p>
                  <p className="mt-2">Email: privacy@cyclodron.com</p>
                  <p>Website: www.cyclodron.com</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm">
                  By using our website and services, you acknowledge that you have read and understood this Privacy
                  Policy and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
