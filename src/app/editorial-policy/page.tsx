import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How FAQ Vape researches, writes and corrects its content.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <LegalLayout title="Editorial Policy" lastUpdated="14 September 2026">
      <p>
        FAQ Vape exists to answer specific vaping questions directly and accurately. This page
        explains how content is researched, written, kept current and corrected when needed.
      </p>

      <h2>How we research</h2>
      <p>
        Each question is answered based on how vape devices and e-liquid actually work, common
        troubleshooting patterns reported by UK vapers, and, for anything regulatory or
        health-related, official UK sources such as GOV.UK, the MHRA, the NHS, Trading Standards
        and OHID. We check regulatory facts, such as nicotine strength limits or the disposable
        vape sales ban, against the current official position before publishing.
      </p>

      <h2>How we write</h2>
      <p>
        We answer the question first and add context second, rather than burying the answer in
        introduction. We separate factual specification claims, like coil resistance or nicotine
        strength limits, from editorial opinion, which we mark clearly with language like "in our
        view" or "many vapers find". We do not claim to have personally lab-tested any product,
        and we do not invent review scores, user counts or testimonials.
      </p>

      <h2>Keeping content current</h2>
      <p>
        Every article shows a "Last updated" date. When UK vaping regulation changes, such as the
        ban on single-use disposable vapes that took effect on 1 June 2025, we review and update
        affected articles rather than leaving outdated guidance live.
      </p>

      <h2>Corrections</h2>
      <p>
        If you spot something inaccurate or out of date, please tell us via our{" "}
        <Link href="/contact" className="font-semibold underline underline-offset-4">
          contact page
        </Link>
        . We'll review genuine corrections and update the relevant article, revising its "Last
        updated" date when a material change is made.
      </p>

      <h2>No paid placement</h2>
      <p>
        FAQ Vape does not accept payment, free products or any other consideration in exchange
        for favourable coverage of a product, brand or retailer. Where a specific product name is
        mentioned, it's because naming it is the clearest way to answer the question, not because
        of any commercial arrangement.
      </p>

      <h2>Who writes this</h2>
      <p>
        Content is written and edited by our UK-based editorial team. We don't publish fictitious
        author bylines, qualifications or awards; see our{" "}
        <Link href="/about" className="font-semibold underline underline-offset-4">
          about page
        </Link>{" "}
        for more on who this site is for and how it's run.
      </p>
    </LegalLayout>
  );
}
