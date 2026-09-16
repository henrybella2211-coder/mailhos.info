import type { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-2xl font-bold tracking-tight">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-7 text-lg font-bold">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-relaxed sm:text-lg">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-none space-y-2 pl-0">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="border-l-4 border-[var(--color-accent)] py-1 pl-4 leading-relaxed sm:text-lg">
      {children}
    </li>
  );
}

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 overflow-x-auto border-2 border-[var(--color-ink)]">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
        {children}
      </table>
    </div>
  );
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5">
      <p className="text-xs font-bold tracking-wide uppercase text-[var(--color-ink)]/70">
        {label}
      </p>
      <div className="mt-2 leading-relaxed sm:text-lg">{children}</div>
    </div>
  );
}
