import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${site.domain} website and the quotes and estimates provided through it.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lede="The terms that apply to this website and to the quotes provided through it. Your actual move is governed by the separate written contract you sign before we begin work."
      updated="22 September 2026"
      trail={[
        { name: "Home", href: "/" },
        { name: "Terms of Service", href: "/terms" },
      ]}
      sections={[
        {
          heading: "About these terms",
          paragraphs: [
            `These terms govern your use of ${site.domain}, operated by ${site.legalName}. By using this site you agree to them. If you do not agree, please do not use the site.`,
            "These terms cover the website only. Moving services are governed by the separate written estimate and contract you receive and sign before any work begins. Where the two conflict, the signed contract controls.",
          ],
        },
        {
          heading: "Quotes and estimates",
          paragraphs: [
            "Prices, ranges and timeframes shown on this site are illustrative and are not offers. They are published to give you a realistic sense of cost before you call, which is information this industry generally does not make easy to find.",
            "A binding quote is produced only after a walkthrough of your property, in person or by video, and is issued in writing. Once issued and accepted, that price is what you pay for the scope described in it.",
            "A quoted price may legitimately change if the scope changes — additional items not disclosed at the walkthrough, access conditions materially different from those described, or services added after the estimate. Any such change is discussed and agreed with you before additional work is carried out, never applied unilaterally after loading.",
          ],
        },
        {
          heading: "Booking, deposits and cancellation",
          paragraphs: [
            "A deposit confirms your date and is credited against your final invoice. The balance is due on completion of the move.",
            "Cancellation and rescheduling terms are set out in your written contract. We do not charge a rescheduling fee where a move is postponed because of severe weather, including a forecast tropical storm or hurricane.",
          ],
        },
        {
          heading: "Items we cannot transport",
          paragraphs: [
            "Federal regulations prohibit certain items on a moving truck and we cannot transport them under any circumstances:",
          ],
          list: [
            "Flammable, corrosive or explosive materials, including propane, gasoline, paint thinner, aerosols and fire extinguishers",
            "Ammunition, fireworks and pool chemicals",
            "Perishable food and live plants on long-distance moves",
            "Pets and live animals",
            "We also ask you to personally transport cash, jewellery, prescription medication, passports and irreplaceable documents",
          ],
        },
        {
          heading: "Liability and valuation coverage",
          paragraphs: [
            "Every move includes standard released-value protection at no additional charge, which covers 60 cents per pound per item. Full-value protection, which covers repair, replacement or cash settlement at actual value, is available for an additional premium and must be elected in writing before the move.",
            "Standard moving valuation generally excludes damage caused by acts of God, including hurricanes, tropical storms and flooding. We reschedule proactively ahead of forecast severe weather in part for this reason.",
            "Claims must be submitted within the period stated in your contract. Note any damage on the paperwork before the crew leaves — this makes a claim substantially easier to resolve.",
          ],
        },
        {
          heading: "Website content",
          paragraphs: [
            "Content on this site is provided for general information. Moving guides and cost ranges are written in good faith from operational experience, but they are general guidance rather than advice specific to your situation, and regulations and market prices change.",
            "All content, branding and design on this site is the property of its owner and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "We link to external resources, including federal regulators, where they are genuinely useful. We are not responsible for the content of external sites.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the State of Florida. Any dispute relating to this website will be resolved in the courts of Florida.",
          ],
        },
      ]}
    />
  );
}
