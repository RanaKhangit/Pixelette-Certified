export interface CaseStudyPreview {
  slug: string;
  client: string;
  industry: string;
  employees: string;
  certifications: string;
  timeline: string;
  challenge: string;
  result: string;
}

export const caseStudies: CaseStudyPreview[] = [
  {
    slug: "uk-fintech-iso-27001",
    client: "UK FinTech",
    industry: "Financial Technology",
    employees: "65 employees",
    certifications: "ISO 27001",
    timeline: "9 weeks",
    challenge:
      "Losing enterprise deals to competitors who already held ISO 27001. Security questionnaires consuming 40+ hours per month.",
    result:
      "Certified in 9 weeks. Enterprise procurement gate cleared. Security questionnaire response time reduced from days to minutes.",
  },
  {
    slug: "ai-saas-iso-42001-iso-27001",
    client: "AI SaaS Platform",
    industry: "Artificial Intelligence",
    employees: "40 employees",
    certifications: "ISO 42001 + ISO 27001",
    timeline: "14 weeks",
    challenge:
      "EU AI Act compliance requirements approaching. Enterprise clients demanding evidence of responsible AI governance alongside information security.",
    result:
      "Dual certification achieved in 14 weeks. First-mover advantage in AI governance. Enterprise contracts closed post-certification.",
  },
  {
    slug: "healthcare-tech-cyber-essentials-iso-27001",
    client: "Healthcare Tech",
    industry: "Healthcare Technology",
    employees: "120 employees",
    certifications: "Cyber Essentials + ISO 27001",
    timeline: "12 weeks",
    challenge:
      "NHS Digital supply chain requirements mandated Cyber Essentials. Private healthcare clients required ISO 27001 for data processing agreements.",
    result:
      "Cyber Essentials achieved in 3 weeks, ISO 27001 in 12 weeks. Won NHS framework contract. Reduced cyber insurance premium.",
  },
];
