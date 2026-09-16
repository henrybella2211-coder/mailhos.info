import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the FAQ Vape editorial team about a question, correction or suggestion.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-4 text-base leading-relaxed sm:text-lg">
        FAQ Vape is a small, independent site with no call centre and no live chat. The most
        reliable way to reach the editorial team is by email. Use this for questions we haven't
        covered yet, corrections to something you've read, or general feedback.
      </p>

      <div className="mt-8 border-2 border-[var(--color-ink)] p-6">
        <p className="text-sm font-bold tracking-wide uppercase text-[var(--color-ink)]/70">
          Email us
        </p>
        <p className="mt-2 text-lg font-semibold">hello@mailhos.info</p>
        <a
          href="mailto:hello@mailhos.info?subject=FAQ%20Vape%20enquiry"
          className="mt-5 inline-flex items-center justify-center border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-3 text-base font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:bg-[var(--color-accent)] focus-visible:text-[var(--color-ink)]"
        >
          Open an email to us &rarr;
        </a>
        <p className="mt-4 text-sm text-[var(--color-ink)]/70">
          This opens your own email application with our address pre-filled. We don't run a web
          contact form, so no message is stored on this site, only in your outgoing email.
        </p>
      </div>

      <p className="mt-8 text-sm text-[var(--color-ink)]/70">
        We aim to read every message, though as a small editorial team we can't guarantee a
        personal reply to every enquiry. We do not offer individual medical, legal or health
        advice; for that, see the NHS or your GP.
      </p>
    </div>
  );
}
