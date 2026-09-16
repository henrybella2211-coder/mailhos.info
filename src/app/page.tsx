import Link from "next/link";
import QuestionSearch from "@/components/QuestionSearch";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/lib/articles";
import { glossary, homepageTeaserTerms } from "@/lib/glossary";

const teaserTerms = glossary.filter((g) => homepageTeaserTerms.includes(g.term));

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: articles.map((a) => ({
      "@type": "Question",
      name: a.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: a.shortAnswer,
      },
    })),
  };

  return (
    <div>
      <JsonLd data={faqSchema} />

      <QuestionSearch articles={articles} />

      {/* Glossary teaser grid */}
      <section className="border-t border-[var(--color-ink)]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Terms worth knowing
            </h2>
            <Link
              href="/glossary"
              className="hidden text-sm font-semibold underline underline-offset-4 hover:text-[var(--color-accent)] sm:inline-block"
            >
              Full glossary &rarr;
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-0 border-t border-l border-[var(--color-ink)] sm:grid-cols-2 lg:grid-cols-3">
            {teaserTerms.map((t) => (
              <div
                key={t.term}
                className="border-r border-b border-[var(--color-ink)] p-5 transition-colors hover:bg-[var(--color-accent)]/20"
              >
                <p className="font-bold">{t.term}</p>
                <p className="mt-1 text-sm text-[var(--color-ink)]/80">{t.definition}</p>
              </div>
            ))}
          </div>
          <Link
            href="/glossary"
            className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:text-[var(--color-accent)] sm:hidden"
          >
            Full glossary &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
