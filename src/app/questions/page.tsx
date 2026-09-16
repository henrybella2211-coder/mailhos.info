import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import QuestionsIndexClient from "@/components/QuestionsIndexClient";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "All vaping questions",
  description:
    "Every vaping question answered on FAQ Vape, grouped by Basics, Troubleshooting and Terminology, with read time and last-updated dates.",
  alternates: { canonical: "/questions" },
};

const SITE_URL = "https://mailhos.info";

export default function QuestionsIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Questions", item: `${SITE_URL}/questions` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: articles.map((a) => ({
      "@type": "Question",
      name: a.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: a.excerpt,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All questions</h1>
      <p className="mt-3 max-w-2xl text-base text-[var(--color-ink)]/80 sm:text-lg">
        Every question on FAQ Vape, grouped by category. Click a row to preview the answer, or
        follow it through to the full article.
      </p>

      <QuestionsIndexClient />
    </div>
  );
}
