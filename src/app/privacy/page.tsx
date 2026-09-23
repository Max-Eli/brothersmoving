import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the personal information you provide when requesting a moving quote.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="What we collect when you request a quote, what we do with it, and what we will never do with it."
      updated="22 September 2026"
      trail={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy" },
      ]}
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect only what we need to prepare your quote and carry out your move. When you submit the quote form, call us or send an email, that typically means:",
          ],
          list: [
            "Your name, phone number and email address",
            "The origin and destination addresses for your move",
            "Your preferred moving date and the size of your home or office",
            "The services you are interested in and any details you choose to share",
            "Basic technical information your browser sends automatically, such as your IP address and browser type",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "Your information is used to respond to your enquiry, prepare a quote, schedule and carry out your move, and communicate with you about it. If you become a customer, we also use it for invoicing, insurance documentation and any claim that may arise.",
            "We may contact you by phone, email or text about your enquiry or your booking. You can ask us to stop at any time.",
          ],
        },
        {
          heading: "What we do not do",
          paragraphs: [
            "We do not sell your personal information. We do not share it with lead-generation networks, moving brokers or marketing companies. This matters in our industry specifically: submitting a quote request to a moving-lead aggregator commonly results in calls from a dozen companies. Your details stay with us.",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "We share information only where it is necessary to deliver your move or where the law requires it:",
          ],
          list: [
            "Our own crew members and staff working on your job",
            "Service providers who operate our systems, such as email delivery and website hosting, under contract and only for that purpose",
            "Insurance providers, where a claim is made",
            "Building management or an HOA, where a certificate of insurance is required for your move",
            "Law enforcement or regulators, where legally required",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "This site uses only the cookies necessary for it to function. If analytics are added in future, this policy will be updated to say what is collected and how to opt out. We do not run advertising trackers or sell browsing data.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Quote requests that do not become bookings are retained for up to two years, since people frequently return when their date firms up. Completed-move records are retained for seven years to meet tax, insurance and regulatory requirements. You can ask us to delete your information sooner and we will, unless we are legally required to keep it.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can ask us for a copy of the information we hold about you, ask us to correct anything inaccurate, ask us to delete it, or ask us to stop contacting you. Email us and we will respond within 30 days. There is no charge for this.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "This site is served over HTTPS and form submissions are transmitted encrypted. We limit access to customer information to staff who need it for their work. No system is perfectly secure, but we take reasonable measures appropriate to the sensitivity of what we hold.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "This site is not directed at children under 13 and we do not knowingly collect their information. If you believe a child has given us personal information, contact us and we will delete it.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If we change this policy we will update the date at the top of this page. Material changes will be highlighted on the site.",
          ],
        },
      ]}
    />
  );
}
