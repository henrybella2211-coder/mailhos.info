import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FAQ Vape",
  description:
    "FAQ Vape is an independent UK vaping information website answering specific, practical vaping questions in plain English.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About FAQ Vape</h1>

      <div className="mt-8 border-2 border-[var(--color-ink)]">
        <Image
          src="/images/vape-device-close-up-about.jpg"
          alt="Close-up of a vape device held in a hand, showing its metal casing and airflow control"
          width={1400}
          height={2100}
          className="h-auto w-full max-h-96 object-cover"
        />
      </div>

      <div className="mt-8 space-y-5 text-base leading-relaxed sm:text-lg">
        <p>
          FAQ Vape is an independent UK vaping information website. We answer specific, narrow
          questions that vapers and prospective vapers actually search for, such as why a coil
          tastes burnt or what mouth-to-lung and direct-to-lung mean, and give a direct answer
          first, with the fuller context after it.
        </p>
        <p>
          The site is written and edited by our UK-based editorial team. We don't invent staff
          biographies, awards or credentials that don't exist; content is researched and written
          in-house, checked against official UK sources for anything regulatory or health-related
          (GOV.UK, MHRA, NHS, Trading Standards and OHID), and updated when guidance or the law
          changes.
        </p>
        <p>
          We are not a retailer and do not sell vaping products. We're not affiliated with any
          manufacturer, and we don't accept payment in exchange for favourable coverage of any
          product or brand. For more on how we research and correct articles, see our{" "}
          <Link href="/editorial-policy" className="font-semibold underline underline-offset-4">
            editorial policy
          </Link>
          .
        </p>
        <p>
          Everything on FAQ Vape is written for adults aged 18 and over, whether you're an
          existing vaper working through a specific problem or someone looking for factual
          information. Nothing here is intended to encourage anyone under 18, or anyone who
          doesn't already smoke or vape, to start. See our{" "}
          <Link href="/age-notice" className="font-semibold underline underline-offset-4">
            age notice
          </Link>{" "}
          for more detail.
        </p>
        <p>
          Vaping is regulated but not risk-free. According to the NHS, vaping is substantially
          less harmful than smoking and can support people trying to quit, but it is not
          risk-free and is not intended for non-smokers. We reflect that position throughout the
          site rather than making our own medical claims.
        </p>
        <p>
          Questions, corrections or suggestions for a question we haven't covered yet are
          welcome. See our{" "}
          <Link href="/contact" className="font-semibold underline underline-offset-4">
            contact page
          </Link>{" "}
          to get in touch.
        </p>
      </div>
    </div>
  );
}
