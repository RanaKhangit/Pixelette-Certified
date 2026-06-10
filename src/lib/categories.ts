import { blogPosts, type BlogPost } from "@/data/blogPosts";

/** Slugify a human category label, e.g. "AI Governance" -> "ai-governance". */
export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Distinct category labels across all blog posts, alphabetically sorted. */
export function allCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category))).sort();
}

/** Resolve a category slug back to its label and the posts in it. */
export function postsByCategorySlug(
  slug: string
): { category: string; posts: BlogPost[] } | undefined {
  const category = blogPosts.find((p) => categorySlug(p.category) === slug)?.category;
  if (!category) return undefined;
  return { category, posts: blogPosts.filter((p) => p.category === category) };
}
