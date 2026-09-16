"use client";

import { useState, type ReactNode } from "react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: ReactNode;
  href?: string;
  linkLabel?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className="hairline-row">
            <h3 className="m-0 text-base font-normal">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-header-${item.id}`}
                onClick={() => toggle(item.id)}
                className={`flex w-full items-center justify-between gap-4 border-l-4 py-4 pr-2 pl-4 text-left transition-colors ${
                  isOpen ? "border-l-[var(--color-accent)]" : "border-l-transparent"
                } hover:border-l-[var(--color-accent)] focus-visible:border-l-[var(--color-accent)]`}
              >
                <span className="text-base font-semibold sm:text-lg">{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl leading-none font-normal">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              hidden={!isOpen}
              className="pr-2 pb-5 pl-8"
            >
              <div className="max-w-2xl text-sm leading-relaxed sm:text-base">{item.answer}</div>
              {item.href && (
                <a
                  href={item.href}
                  className="mt-3 inline-block font-semibold underline decoration-2 underline-offset-4 hover:text-[var(--color-accent)]"
                >
                  {item.linkLabel ?? "Read the full answer"} &rarr;
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
