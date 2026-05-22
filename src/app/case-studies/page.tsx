"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/data/caseStudies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CaseStudiesPage() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Real Results for Real Companies"
          description="How UK technology companies achieved certification faster, won enterprise deals, and built lasting compliance programmes."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.slug} variants={cardVariants}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="block h-full"
              >
                <Card variant="glass" className="h-full flex flex-col">
                  {/* Client snapshot */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {study.client}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {study.industry}, {study.employees}
                    </p>
                  </div>

                  {/* Certification badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.certifications.split(" + ").map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full">
                      {study.timeline}
                    </span>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Result
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {study.result}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-accent text-sm font-semibold">
                      Read case study &rarr;
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want results like these?
            </h3>
            <p className="text-gray-400 mb-6">
              Every engagement starts with a free consultation. Let us assess
              your current position and design a roadmap to certification.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              See Your 10-Week Certification Roadmap
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
