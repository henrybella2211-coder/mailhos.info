import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Vaping glossary",
  description:
    "Plain-English definitions of common UK vaping terms, from airflow and coil to sub-ohm, nic salt and wattage.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Glossary</h1>
      <p className="mt-3 max-w-2xl text-base text-[var(--color-ink)]/80 sm:text-lg">
        Plain-English definitions of the vaping terms that come up most often. For a fuller
        explanation of mouth-to-lung and direct-to-lung vaping specifically, read{" "}
        <Link
          href="/questions/mtl-and-dtl-what-do-these-terms-mean"
          className="font-semibold underline underline-offset-4"
        >
          MTL and DTL: what do these terms actually mean?
        </Link>
      </p>

      <dl className="mt-8">
        {glossary.map((g) => (
          <div key={g.term} className="hairline-row py-5">
            <dt className="text-lg font-bold">{g.term}</dt>
            <dd className="mt-1 max-w-2xl text-[var(--color-ink)]/85">{g.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
