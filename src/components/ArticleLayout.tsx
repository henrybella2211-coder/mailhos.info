import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import type { ArticleMeta } from "@/lib/articles";
import { getRelated } from "@/lib/articles";

const SITE_URL = "https://mailhos.info";

export default function ArticleLayout({
  article,
  children,
}: {
  article: ArticleMeta;
  children: ReactNode;
}) {
  const related = getRelated(article);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: "FAQ Vape editorial team",
    },
    publisher: {
      "@type": "Organization",
      name: "FAQ Vape",
    },
    mainEntityOfPage: `${SITE_URL}/questions/${article.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Questions", item: `${SITE_URL}/questions` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/questions/${article.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-[var(--color-ink)]/70">
          <li>
            <Link href="/" className="underline underline-offset-2 hover:text-[var(--color-ink)]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/questions"
              className="underline underline-offset-2 hover:text-[var(--color-ink)]"
            >
              Questions
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-[var(--color-ink)]" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      <span className="inline-block border-2 border-[var(--color-ink)] bg-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-wide uppercase">
        {article.category}
      </span>

      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>

      <p className="mt-3 text-sm text-[var(--color-ink)]/70">
        Last updated {article.dateModifiedDisplay} &middot; {article.readTime}
      </p>

      <div className="mt-8 border-2 border-[var(--color-ink)]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          width={article.image.width}
          height={article.image.height}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="mt-8 max-w-none text-[var(--color-ink)]">{children}</div>

      {related.length > 0 && (
        <aside className="mt-14 border-t-2 border-[var(--color-ink)] pt-6">
          <h2 className="text-lg font-bold">Related questions</h2>
          <ul className="mt-3 space-y-3">
            {related.map((r) => (
              <li key={r.slug} className="hairline-row pb-3">
                <Link
                  href={`/questions/${r.slug}`}
                  className="font-semibold underline underline-offset-4 hover:text-[var(--color-accent)]"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
