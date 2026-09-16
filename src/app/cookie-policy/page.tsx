import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies, if any, FAQ Vape uses.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="14 September 2026">
      <p>
        This page explains, plainly, what cookies FAQ Vape (mailhos.info) actually uses. We'd
        rather say honestly that we use very little than list categories we don't actually set.
      </p>

      <h2>What cookies are</h2>
      <p>
        A cookie is a small text file a website can ask your browser to store, typically used to
        remember settings between visits or to track behaviour for analytics or advertising.
      </p>

      <h2>What FAQ Vape actually uses</h2>
      <p>
        This website does not currently use tracking or advertising cookies. We have not added
        any third-party analytics, advertising or social media embed scripts that set cookies. If
        the site's hosting or browser environment sets any strictly necessary technical cookie
        purely to make pages function correctly, no separate consent is required for that under
        UK cookie law, and none are currently used for tracking purposes.
      </p>

      <h2>If this changes</h2>
      <p>
        Should we ever add analytics or any other cookie-setting service in future, we will
        update this page first, describe exactly what's added and why, and add a consent
        mechanism if required by law before any non-essential cookie is set. We do not currently
        operate a cookie consent banner because we do not currently set non-essential cookies.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about cookies on this site, see our{" "}
        <Link href="/contact" className="font-semibold underline underline-offset-4">
          contact page
        </Link>
        , or read our{" "}
        <Link href="/privacy-policy" className="font-semibold underline underline-offset-4">
          privacy policy
        </Link>{" "}
        for how we handle other information.
      </p>
    </LegalLayout>
  );
}
