import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Cyclodron Photography",
  description:
    "Review the Cyclodron Photography Terms of Service outlining the conditions for using our website, booking photography services, image usage rights, and client responsibilities.",
  openGraph: {
    title: "Terms of Service | Cyclodron Photography",
    description:
      "Review the Cyclodron Photography Terms of Service outlining the conditions for using our website, booking photography services, image usage rights, and client responsibilities.",
    url: "https://cyclodron.com/terms-of-service",
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
    title: "Terms of Service | Cyclodron Photography",
    description:
      "Review the Cyclodron Photography Terms of Service outlining the conditions for using our website, booking photography services, image usage rights, and client responsibilities.",
    images: ["https://cyclodron.com/logo.png"],
  },
  alternates: {
    canonical: "https://cyclodron.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Service
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> November 25, 2025
              </p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you,"
                  or "your") and Cyclodron Photography ("we," "us," or "our") governing your use of our website and
                  photography services.
                </p>
                <p>
                  By booking a session, accessing our website, or engaging our services, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our
                  services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">2. Services Provided</h2>
                <p>Cyclodron Photography provides professional photography services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real estate photography</li>
                  <li>Landscape and nature photography</li>
                  <li>Portrait and event photography</li>
                  <li>Custom photography projects</li>
                </ul>
                <p className="mt-4">
                  All services are subject to availability and must be scheduled in advance through our booking system
                  or direct communication.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">3. Booking and Deposits</h2>
                <h3 className="text-xl font-semibold text-foreground">Booking Process</h3>
                <p>
                  To reserve a photography session, you must complete our booking process and provide accurate
                  information, including date, location, and service type. A booking is confirmed only upon receipt of
                  the required deposit and written confirmation from us.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Deposit Requirements</h3>
                <p>
                  A non-refundable deposit (typically 30-50% of the total session fee) is required to secure your
                  booking. The remaining balance is due on or before the session date unless otherwise agreed in
                  writing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">4. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are quoted in USD and subject to applicable taxes</li>
                  <li>Payment can be made via credit card, bank transfer, or other agreed methods</li>
                  <li>Late payments may incur additional fees and delay image delivery</li>
                  <li>We reserve the right to withhold delivery of images until full payment is received</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">5. Cancellations and Rescheduling</h2>
                <h3 className="text-xl font-semibold text-foreground">Client Cancellations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">More than 14 days before session:</strong> Deposit may be
                    transferred to a future date within 12 months
                  </li>
                  <li>
                    <strong className="text-foreground">7-14 days before session:</strong> 50% of total fee forfeited;
                    remainder may be applied to future booking
                  </li>
                  <li>
                    <strong className="text-foreground">Less than 7 days before session:</strong> Full payment forfeited
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">Rescheduling</h3>
                <p>
                  You may reschedule your session up to 14 days in advance without penalty, subject to availability.
                  Rescheduling requests made less than 14 days before the session may incur a rescheduling fee.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Weather and Force Majeure</h3>
                <p>
                  In the event of severe weather or unforeseen circumstances beyond our control, we reserve the right to
                  reschedule your session. In such cases, you will not be charged any rescheduling fees, and your
                  deposit will remain valid.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  6. Copyright and Image Usage Rights
                </h2>
                <h3 className="text-xl font-semibold text-foreground">Copyright Ownership</h3>
                <p>
                  All photographs and images created by Cyclodron Photography remain the intellectual property of
                  Cyclodron Photography. We retain full copyright and ownership of all images, including negatives,
                  digital files, and proofs.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Client Usage Rights</h3>
                <p>
                  Upon full payment, clients receive a limited, non-exclusive license to use the delivered images for
                  personal purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Printing for personal display</li>
                  <li>Sharing on personal social media accounts</li>
                  <li>Using for personal websites or portfolios (with photographer credit)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">Commercial Use</h3>
                <p>
                  Commercial use of images requires prior written consent and may involve additional licensing fees.
                  Commercial use includes, but is not limited to, advertising, resale, promotional materials, and
                  publication.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Portfolio and Promotional Use</h3>
                <p>
                  Unless you explicitly opt out in writing, we reserve the right to use images from your session for our
                  portfolio, marketing materials, social media, website, and promotional purposes. Proper credit will be
                  given when applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">7. Image Delivery and Editing</h2>
                <h3 className="text-xl font-semibold text-foreground">Delivery Timeline</h3>
                <p>
                  Edited images will typically be delivered within 2-4 weeks of your session date. Rush delivery may be
                  available for an additional fee. Delivery timelines may be extended during peak seasons.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Editing and Selection</h3>
                <p>
                  We will professionally edit and color-correct your images according to our artistic style. The number
                  of final delivered images depends on your package and session type. We reserve the right to select
                  which images are edited and delivered.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6">Additional Editing Requests</h3>
                <p>
                  Minor editing adjustments may be accommodated at our discretion. Extensive re-editing or additional
                  image selections may incur extra charges.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">8. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Arrive on time for scheduled sessions</li>
                  <li>Provide accurate location and contact information</li>
                  <li>Ensure proper permissions for shooting locations</li>
                  <li>Respect our time and professional recommendations</li>
                  <li>Refrain from editing, altering, or cropping images without permission</li>
                  <li>Not share, sell, or distribute images to third parties for commercial use</li>
                  <li>Provide credit to Cyclodron Photography when sharing images publicly</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
                <p>
                  While we take every precaution to deliver exceptional photography services, unforeseen technical
                  failures, equipment malfunctions, or circumstances beyond our control may occur. In such cases, our
                  liability is limited to a refund of fees paid or a complimentary rescheduled session.
                </p>
                <p className="mt-4">
                  We are not liable for any indirect, incidental, or consequential damages arising from the use of our
                  services or website. Our total liability shall not exceed the amount paid for the specific service in
                  question.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">10. Data Backup and Storage</h2>
                <p>
                  We maintain backups of your images for a limited period (typically 12-24 months) after delivery. After
                  this period, we are not responsible for storing or providing additional copies. Clients are
                  responsible for backing up their delivered images.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">11. Model Release</h2>
                <p>
                  By engaging our services, you grant us permission to photograph you and any individuals present during
                  the session. You also grant us the right to use these images for promotional purposes unless you
                  provide written notice to opt out.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">12. Disputes and Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which Cyclodron Photography operates. Any disputes arising from these Terms or our services shall be
                  resolved through good faith negotiation or, if necessary, binding arbitration.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be posted on this page with an
                  updated "Last Updated" date. Your continued use of our services after any modifications constitutes
                  acceptance of the updated Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">14. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions
                  shall continue in full force and effect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-foreground">15. Contact Information</h2>
                <p>For questions, concerns, or clarifications regarding these Terms of Service, please contact us:</p>
                <div className="mt-4 rounded-lg bg-muted/10 p-6 border border-border">
                  <p className="font-semibold text-foreground">Cyclodron Photography</p>
                  <p className="mt-2">Email: info@cyclodron.com</p>
                  <p>Website: www.cyclodron.com</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm">
                  By booking our services, you acknowledge that you have read, understood, and agree to be bound by
                  these Terms of Service.
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
