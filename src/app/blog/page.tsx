"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import { blogPosts } from "@/data/blogPosts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          label="Blog"
          title="Insights & Guides"
          description="Compliance Intelligence, Strategic thinking on certification, procurement, AI governance, and enterprise readiness. Written by UK-credentialled practitioners, for businesses operating in any market."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card variant="glass" className="h-full flex flex-col">
                  {/* Category tag */}
                  <span className="inline-block self-start px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full mb-4">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">,</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <span className="text-accent text-sm font-semibold">
                      Read more &rarr;
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
            <h2 className="text-2xl font-bold text-white mb-3">
              Need expert guidance?
            </h2>
            <p className="text-gray-400 mb-6">
              Book a free consultation with our compliance team to discuss your
              certification needs.
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
