import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "FAQ Vape is intended for adults aged 18 and over.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <LegalLayout title="Age Notice" lastUpdated="14 September 2026">
      <p>
        FAQ Vape is intended for adults aged 18 and over: people who already smoke or vape, or
        who are seeking factual information about vaping. It is not intended to encourage anyone
        under the age of 18, or anyone who does not already smoke or vape, to start using vaping
        products.
      </p>

      <h2>The law</h2>
      <p>
        Under UK law it is illegal to sell vaping or tobacco products to anyone under 18. This is
        set out in the Children and Young Persons Act and enforced through retailer age
        verification checks at the point of sale; "Challenge 25" is a common retailer policy
        asking for ID from anyone who appears under 25, rather than a separate law in itself.
      </p>

      <h2>Why we don't run a full-screen age gate</h2>
      <p>
        We keep this as a clear, persistent notice rather than a blocking pop-up that visitors
        have to click through. A full-screen interstitial can be bypassed with a single click
        regardless of someone's actual age, so it does little to genuinely restrict access, while
        making the site harder to use and less accessible. A visible, honest statement of who the
        content is for does more good.
      </p>

      <h2>If you're not sure vaping is right for you</h2>
      <p>
        If you don't currently smoke or vape, vaping products are not intended for you. If you do
        smoke and are considering switching, the NHS provides free, impartial stop smoking
        support and information on vaping as a quitting tool at{" "}
        <a
          href="https://www.nhs.uk/better-health/quit-smoking/"
          className="font-semibold underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          nhs.uk
        </a>
        .
      </p>

      <p>
        For more on how this site is written and who it's for, see our{" "}
        <Link href="/about" className="font-semibold underline underline-offset-4">
          about page
        </Link>
        .
      </p>
    </LegalLayout>
  );
}
