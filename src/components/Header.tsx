import Link from "next/link";

const navLinks = [
  { href: "/questions", label: "Questions" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-[var(--color-ink)]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl"
        >
          FAQ Vape
          <span className="text-[var(--color-accent)]">.</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm font-semibold sm:gap-8 sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 hover:border-[var(--color-accent)] focus-visible:border-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
