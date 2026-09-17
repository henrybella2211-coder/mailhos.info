"use client";

import Accordion, { type AccordionItem } from "./Accordion";
import { articles, categoryOrder } from "@/lib/articles";

export default function QuestionsIndexClient() {
  return (
    <div className="mt-10 space-y-12">
      {categoryOrder.map((category) => {
        const inCategory = articles.filter((a) => a.category === category);
        if (inCategory.length === 0) return null;

        const items: AccordionItem[] = inCategory.map((a) => ({
          id: a.slug,
          question: a.title,
          answer: <p>{a.excerpt}</p>,
          href: `/questions/${a.slug}`,
          linkLabel: "Read the full answer",
        }));

        return (
          <div key={category}>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{category}</h2>
            <p className="mt-1 text-sm text-[var(--color-ink)]/70">
              {category === "Basics" &&
                "Foundational habits and maintenance every vaper should know."}
              {category === "Troubleshooting" &&
                "Fixing the specific problems that come up with day-to-day vaping."}
              {category === "Terminology" && "Plain-English definitions of common vaping terms."}
              {category === "Rules & Travel" &&
                "UK regulations and practical guidance for buying, carrying and travelling with vapes."}
            </p>
            <div className="mt-4">
              <Accordion items={items} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
