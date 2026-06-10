import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";

export interface Crumb {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  /** Trail WITHOUT the leading Home item; Home is prepended automatically. The final item should omit href (current page). */
  items: Crumb[];
  /** Set true on dark/primary backgrounds so the trail stays legible. */
  dark?: boolean;
  /** Emit BreadcrumbList JSON-LD. Set false on pages that already render BreadcrumbSchema so only one BreadcrumbList exists. */
  schema?: boolean;
}

/**
 * Single source of truth for breadcrumbs: renders the visible <nav> trail AND
 * an exactly-matching BreadcrumbList JSON-LD block, so visible and schema can
 * never drift. Always starts at Home and ends at the current page.
 */
export default function Breadcrumbs({ items, dark = false, schema = true }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={dark ? "text-gray-300" : "text-gray-500"}
    >
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              ...(item.href
                ? { item: `https://pixelettecertified.com${item.href}` }
                : {}),
            })),
          }}
        />
      )}
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.name + i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? (dark ? "text-white font-medium" : "text-primary font-medium") : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
