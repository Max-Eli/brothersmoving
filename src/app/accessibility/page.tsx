import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${site.name}'s commitment to keeping this website usable for everyone, and how to tell us if something is not working for you.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      lede="We want this site to work for everyone, including people using screen readers, keyboard navigation or magnification."
      updated="22 September 2026"
      trail={[
        { name: "Home", href: "/" },
        { name: "Accessibility", href: "/accessibility" },
      ]}
      sections={[
        {
          heading: "Our commitment",
          paragraphs: [
            "This site is built to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. Accessibility is treated as part of building the site rather than as something audited afterwards.",
          ],
        },
        {
          heading: "What we have done",
          list: [
            "Semantic HTML throughout, so screen readers can navigate by heading and landmark",
            "A skip-to-content link as the first focusable element on every page",
            "Visible focus indicators on every interactive element",
            "Full keyboard operability — no feature requires a mouse",
            "Text and background colour combinations that meet WCAG AA contrast ratios",
            "Descriptive link text rather than 'click here'",
            "Form fields with properly associated labels, and errors announced to assistive technology",
            "Reduced-motion support, so animation is disabled when your system requests it",
            "Responsive layouts that work at 200% zoom without horizontal scrolling",
            "Decorative graphics hidden from assistive technology so they do not add noise",
          ],
        },
        {
          heading: "Known limitations",
          paragraphs: [
            "Accessibility work is never finished. If you encounter a barrier anywhere on this site, we want to hear about it — we treat those reports as bugs and fix them.",
          ],
        },
        {
          heading: "Getting help another way",
          paragraphs: [
            "If any part of this site is difficult for you to use, call us at " +
              site.phoneDisplay +
              " and we will take your details, answer your questions and arrange your quote over the phone. You will never need to use the website to become a customer.",
          ],
        },
        {
          heading: "Tell us about a problem",
          paragraphs: [
            "Email us with the page address and a short description of what did not work, including the assistive technology or browser you were using if you know it. We aim to respond within five business days.",
          ],
        },
      ]}
    />
  );
}
