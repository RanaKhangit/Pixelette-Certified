import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About | ISO Certification Experts",
  description:
    "Global ISO certification and compliance consultancy serving every industry. 50+ certifications delivered, 98% first-attempt pass rate. Expert-led, fixed fee.",
  openGraph: {
    title: "About Pixelette Certified | Global ISO Certification & Compliance Experts",
    description:
      "Global ISO certification and compliance consultancy serving every industry. 50+ certifications delivered, 98% first-attempt pass rate. Expert-led, fixed fee.",
  },
  alternates: {
    canonical: "https://pixelettecertified.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pixelette Certified",
          url: "https://pixelettecertified.com",
          logo: "https://pixelettecertified.com/logos/logo-green-text.svg",
          description:
            "UK-based ISO certification and compliance consultancy specialising in technology companies.",
          foundingDate: "2024",
          parentOrganization: {
            "@type": "Organization",
            name: "Pixelette Group",
          },
          areaServed: [
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Ireland" },
            { "@type": "Country", name: "United Arab Emirates" },
          ],
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 27001 Certified Practice" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "IRCA Certified ISO 27001 Lead Auditors" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "IAPP CIPP/E Qualified" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "membership", name: "CQI Corporate Member" },
          ],
          knowsAbout: [
            "ISO 27001", "ISO 22301", "ISO 9001", "ISO 14001", "ISO 42001",
            "Cyber Essentials", "GDPR", "Penetration Testing", "AI Governance",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@pixelettecertified.com",
            availableLanguage: "English",
          },
          employee: [
            { "@type": "Person", name: "Asif Rana Ashiq", jobTitle: "CEO & Founder" },
            { "@type": "Person", name: "Muhammad Waleed", jobTitle: "Lead Consultant" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Waleed",
          jobTitle: "Lead Consultant",
          description:
            "Lead Consultant at Pixelette Certified. Leads all certification engagements and audit preparation. Holds ISO 27001 Lead Auditor (IRCA), ISO 42001 Lead Auditor (PECB), AIGP, FIP, CIPP/US, CIPM, CISA, and CEH credentials.",
          worksFor: { "@id": "https://pixelettecertified.com/#organization" },
          knowsAbout: [
            "ISO 27001",
            "ISO 42001",
            "AI Governance",
            "Information Security Management",
            "Data Privacy",
            "Penetration Testing",
          ],
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 27001 Lead Auditor (IRCA)" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 42001 Lead Auditor (PECB)" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "AIGP" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "FIP" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "CIPP/US" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "CIPM" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "CISA" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "CEH" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asif Rana Ashiq",
          jobTitle: "CEO & Founder",
          description:
            "Founder of the Pixelette Group and CEO of Pixelette Certified, with over a decade of experience building technology solutions across the UK, Middle East, and Europe.",
          worksFor: { "@id": "https://pixelettecertified.com/#organization" },
        }}
      />
      <AboutContent />
    </>
  );
}
