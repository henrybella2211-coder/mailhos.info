"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Accordion, { type AccordionItem } from "./Accordion";
import type { ArticleMeta } from "@/lib/articles";

export default function QuestionSearch({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.shortAnswer.toLowerCase().includes(q)
    );
  }, [articles, query]);

  const items: AccordionItem[] = filtered.map((a) => ({
    id: a.slug,
    question: a.title,
    answer: <p>{a.shortAnswer}</p>,
    href: `/questions/${a.slug}`,
    linkLabel: "Read the full answer",
  }));

  return (
    <>
      {/* Hero search prompt */}
      <section className="border-b border-[var(--color-ink)]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-bold tracking-wide uppercase text-[var(--color-ink)]/60">
            FAQ Vape &middot; UK vaping questions, answered directly
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            What do you want to know?
          </h1>
          <p className="mt-4 max-w-xl text-base text-[var(--color-ink)]/80 sm:text-lg">
            Search a specific vaping question below, or browse the popular questions and
            glossary further down the page. Straight answers to common vaping questions, no
            fluff.
          </p>
          <div className="mt-8 max-w-xl">
            <label htmlFor="question-search" className="sr-only">
              Search vaping questions
            </label>
            <div className="flex items-stretch border-2 border-[var(--color-ink)]">
              <input
                id="question-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. burnt taste, MTL, coil life&hellip;"
                className="w-full bg-[var(--color-paper)] px-4 py-4 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/50 focus:outline-none sm:text-lg"
              />
              <span
                aria-hidden="true"
                className="flex items-center justify-center border-l-2 border-[var(--color-ink)] bg-[var(--color-accent)] px-5 text-lg font-bold"
              >
                ?
              </span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink)]/70" aria-live="polite">
              {query.trim()
                ? `${filtered.length} matching question${filtered.length === 1 ? "" : "s"}`
                : `${articles.length} questions available`}
            </p>
          </div>
        </div>
      </section>

      {/* Popular questions accordion, filtered by the search box above */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {query.trim() ? "Matching questions" : "Popular questions"}
          </h2>
          <Link
            href="/questions"
            className="hidden text-sm font-semibold underline underline-offset-4 hover:text-[var(--color-accent)] sm:inline-block"
          >
            View all questions &rarr;
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-ink)]/70">
          Click a question to expand it here, or follow the link through to the full answer.
        </p>
        <div className="mt-6">
          {items.length > 0 ? (
            <Accordion items={items} />
          ) : (
            <p className="border border-[var(--color-ink)] px-4 py-6 text-sm">
              No questions match &ldquo;{query}&rdquo; yet. Browse the full{" "}
              <Link href="/questions" className="font-semibold underline underline-offset-4">
                questions index
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold underline underline-offset-4">
                get in touch
              </Link>{" "}
              with what you&rsquo;d like covered.
            </p>
          )}
        </div>
        <Link
          href="/questions"
          className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:text-[var(--color-accent)] sm:hidden"
        >
          View all questions &rarr;
        </Link>
      </section>
    </>
  );
}
