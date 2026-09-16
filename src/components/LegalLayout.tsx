import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-[var(--color-ink)]/70">Last updated {lastUpdated}</p>
      <div className="mt-8 space-y-5 text-base leading-relaxed sm:text-lg [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2">
        {children}
      </div>
    </div>
  );
}
