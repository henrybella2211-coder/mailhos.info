import Link from "next/link";

const footerLinks = [
  { href: "/questions", label: "Questions" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/age-notice", label: "Age Notice" },
];

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-y border-[var(--color-ink)] bg-[var(--color-accent)]">
        <p className="mx-auto max-w-5xl px-5 py-3 text-center text-sm font-semibold text-[var(--color-ink)] sm:px-8">
          FAQ Vape is intended for adults aged 18 and over who already smoke or vape, or who
          are seeking factual information. It is not intended to encourage non-smokers or
          anyone under 18 to start vaping.{" "}
          <Link href="/age-notice" className="underline underline-offset-2">
            Read our full age notice
          </Link>
          .
        </p>
      </div>
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--color-accent)] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-6 text-xs text-[var(--color-ink)]/70">
          &copy; {new Date().getFullYear()} FAQ Vape. Independent UK vaping information
          website. Not affiliated with any manufacturer or retailer.
        </p>
      </div>
    </footer>
  );
}
