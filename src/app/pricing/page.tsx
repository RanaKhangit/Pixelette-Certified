import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Fixed-Fee ISO & Compliance Consultancy",
  description:
    "Transparent fixed-fee pricing for ISO 27001, ISO 42001, Cyber Essentials, GDPR, vCISO, and penetration testing. No hourly billing, no scope creep. 90 days post-certification support included.",
  alternates: {
    canonical: "https://pixelettecertified.com/pricing",
  },
  openGraph: {
    title: "Pricing | Fixed-Fee Compliance Consultancy | Pixelette Certified",
    description:
      "Transparent fixed-fee pricing for ISO 27001, ISO 42001, Cyber Essentials, GDPR, vCISO, and penetration testing. No hourly billing, no scope creep. 90 days post-certification support included.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
