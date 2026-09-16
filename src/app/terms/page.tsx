import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and editorial disclaimer for FAQ Vape.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Website Disclaimer" lastUpdated="14 September 2026">
      <p>
        These terms apply to your use of FAQ Vape (mailhos.info). By using this site you accept
        them. If you don't agree with any part, please don't use the site.
      </p>

      <h2>Informational purpose only</h2>
      <p>
        FAQ Vape is an independent information and editorial website. Content answers general
        vaping questions and is provided for information only; it is not personalised medical,
        legal or safety advice, and it is not a substitute for guidance from the NHS, your GP, or
        official UK regulatory bodies. We do not claim vaping is safe, harmless or a guaranteed
        way to quit smoking; where we reference health positions, we attribute them to the
        organisation that holds them, such as the NHS or OHID.
      </p>

      <h2>Age restriction</h2>
      <p>
        This site is intended for adults aged 18 and over, whether existing smokers, existing
        vapers, or people seeking factual information. It is not intended to encourage anyone
        under 18, or anyone who does not already smoke or vape, to start. See our{" "}
        <Link href="/age-notice" className="font-semibold underline underline-offset-4">
          age notice
        </Link>{" "}
        for detail. UK law sets the minimum age to buy vaping and tobacco products at 18.
      </p>

      <h2>No liability for third-party products</h2>
      <p>
        We may name specific device or brand names when it's useful context, but we do not sell
        products, and mentioning a product is not an endorsement or a guarantee of its quality,
        safety or availability. We accept no liability for the performance, safety or legality of
        any third-party product you purchase elsewhere.
      </p>

      <h2>External links</h2>
      <p>
        Where we link to external sites, such as GOV.UK, the MHRA, the NHS or a manufacturer's
        website, we do so because it's genuinely useful to the reader. We don't control those
        sites and aren't responsible for their content, accuracy or availability.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design and layout of FAQ Vape belong to FAQ Vape unless stated otherwise. You're
        welcome to link to our pages; please don't republish our articles wholesale without
        permission.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms occasionally to reflect changes to the site or the law. The
        date at the top of this page shows when it was last revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent via our{" "}
        <Link href="/contact" className="font-semibold underline underline-offset-4">
          contact page
        </Link>
        .
      </p>
    </LegalLayout>
  );
}
