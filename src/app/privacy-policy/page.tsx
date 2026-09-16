import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FAQ Vape collects, uses and protects information from visitors.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="14 September 2026">
      <p>
        This policy explains what information FAQ Vape (mailhos.info) collects from visitors,
        why, and what your rights are under UK data protection law. FAQ Vape is an independent
        editorial website; it is not a retailer and does not process payments or accounts.
      </p>

      <h2>What we collect</h2>
      <p>
        We keep this deliberately simple. FAQ Vape does not require you to register an account,
        and browsing the site does not require you to hand over any personal information.
      </p>
      <ul>
        <li>
          <strong>Contact enquiries.</strong> If you email us via the address on our{" "}
          <Link href="/contact" className="font-semibold underline underline-offset-4">
            contact page
          </Link>
          , we receive whatever you choose to include in that email, such as your address and
          message content. This is handled by our email provider and is used only to respond to
          you.
        </li>
        <li>
          <strong>Basic technical logs.</strong> Like most websites, our hosting provider may
          keep standard server logs (such as IP address, browser type and pages requested) for
          security and reliability purposes. We do not use these logs to build advertising
          profiles.
        </li>
      </ul>

      <h2>Analytics and advertising</h2>
      <p>
        FAQ Vape does not currently run third-party analytics or advertising scripts. If that
        changes in future, this policy and our{" "}
        <Link href="/cookie-policy" className="font-semibold underline underline-offset-4">
          cookie policy
        </Link>{" "}
        will be updated first to reflect it honestly.
      </p>

      <h2>Legal basis and your rights</h2>
      <p>
        Under UK GDPR and the Data Protection Act 2018, you have rights to access, correct or
        request deletion of personal data we hold about you, such as the content of an email
        enquiry. Where we process a contact enquiry, our legal basis is legitimate interest in
        responding to your message.
      </p>

      <h2>Third parties</h2>
      <p>
        We do not sell or share personal information with third parties for marketing purposes.
        Our email provider processes contact enquiries on our behalf as a data processor.
      </p>

      <h2>Retention</h2>
      <p>
        We keep contact enquiries only as long as needed to respond to them and for a reasonable
        period afterwards in case of follow-up, then delete them.
      </p>

      <h2>Contact about your data</h2>
      <p>
        For any question about this policy or your data, use the address on our{" "}
        <Link href="/contact" className="font-semibold underline underline-offset-4">
          contact page
        </Link>
        . You can also complain to the UK Information Commissioner's Office (ICO) if you believe
        your data has been mishandled.
      </p>
    </LegalLayout>
  );
}
