import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { SITE_CONFIG } from "@/lib/constants";

const blogPostSlugs: { slug: string; date: string }[] = [
  { slug: "iso-27001-security-questionnaire", date: "2026-04-07" },
  { slug: "iso-27001-10-weeks-vs-6-months", date: "2026-04-06" },
  { slug: "real-cost-not-being-iso-27001-certified", date: "2026-04-05" },
  { slug: "customer-asked-ai-governance", date: "2026-04-04" },
  { slug: "iso-27001-or-soc-2-uk-saas", date: "2026-04-03" },
  { slug: "enterprise-security-questionnaire-without-iso-27001", date: "2026-04-02" },
  { slug: "iso-27001-uk-fintech-fca-dora", date: "2026-04-01" },
  { slug: "iso-27001-uk-healthtech-nhs", date: "2026-03-31" },
  { slug: "iso-27001-ai-companies-iso-42001", date: "2026-03-30" },
  { slug: "iso-27001-legal-firms-sra", date: "2026-03-29" },
  { slug: "investor-asked-security-posture", date: "2026-03-28" },
  { slug: "cyber-insurance-premium-increased", date: "2026-03-27" },
  { slug: "iso-27001-vs-cyber-essentials-plus", date: "2026-03-26" },
  { slug: "vanta-drata-vs-real-consultancy", date: "2026-03-25" },
  { slug: "iso-27001-projects-over-budget", date: "2026-03-24" },
  { slug: "20-person-company-iso-27001", date: "2026-03-23" },
  { slug: "eu-ai-act-uk-companies", date: "2026-03-22" },
  { slug: "iso-42001-vs-eu-ai-act", date: "2026-03-21" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const SERVICE_PAGES_WITH_ROUTES = new Set([
    "iso-27001", "iso-22301", "iso-9001", "iso-14001", "iso-42001",
    "cyber-essentials", "vciso", "vdpo", "penetration-testing", "gdpr-privacy",
  ]);

  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => SERVICE_PAGES_WITH_ROUTES.has(service.slug))
    .map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPostSlugs.map(({ slug, date }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...caseStudyPages, ...blogPages];
}
