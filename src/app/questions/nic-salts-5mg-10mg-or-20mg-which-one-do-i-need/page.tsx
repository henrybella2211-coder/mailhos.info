import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("nic-salts-5mg-10mg-or-20mg-which-one-do-i-need")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/questions/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: "article",
    images: [article.image.src],
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <P>
        Nic salt e-liquids like the Elux Legend range are sold in three strengths, 5mg, 10mg and
        20mg, and that number is a concentration: it's how many milligrams of nicotine sit in
        every millilitre of the 10ml bottle. A 20mg bottle carries four times as much nicotine per
        millilitre as a 5mg bottle from the same range. Which one fits you depends mostly on how
        much nicotine you're already used to, from cigarettes or from vaping, and nicotine needs
        genuinely vary from person to person, so there's no single strength that's correct for
        everyone. As a general starting point, many vapers who find a strength too weak simply
        move up a step next time, rather than guessing high from day one.
      </P>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Strength</th>
            <th className="px-4 py-3 font-bold">What it means</th>
            <th className="px-4 py-3 font-bold">Who tends to pick it</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">5mg</td>
            <td className="px-4 py-3">5mg of nicotine per ml</td>
            <td className="px-4 py-3">
              Vapers who smoked lightly, already vape at a low strength, or simply prefer a milder
              hit
            </td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">10mg</td>
            <td className="px-4 py-3">10mg of nicotine per ml</td>
            <td className="px-4 py-3">
              Vapers coming from a moderate smoking habit, or already comfortable at a mid-range
              nic salt strength
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3">20mg</td>
            <td className="px-4 py-3">
              20mg of nicotine per ml &mdash; the UK's regulatory cap
            </td>
            <td className="px-4 py-3">
              Vapers coming from a heavier smoking habit who want a strength closer to what
              they're used to
            </td>
          </tr>
        </tbody>
      </Table>

      <H2>What do the numbers actually mean?</H2>
      <P>
        Every Elux Legend nic salt bottle holds 10ml, and the mg figure on the label is a
        concentration rather than a total dose, milligrams of nicotine per millilitre of liquid.
        In the UK, nicotine e-liquid is capped by regulation at 20mg/ml, which is why 20mg is the
        top of the range rather than the middle of it; there's no stronger option sold legally
        above that. The range uses a standard 50/50 PG/VG nic salt formulation, typically priced
        around £2.49 per 10ml bottle, with roughly 50 flavours available at 10mg and 20mg and a
        smaller selection of around 20 flavours specifically at 5mg.
      </P>

      <H2>How do you estimate which strength might suit you?</H2>
      <P>
        There's no exact formula, but your prior habits are the most useful guide. Many vapers who
        smoked close to a pack a day find a strength nearer the top of the range, 20mg, feels
        closer to what they're used to, at least to begin with. Vapers who smoked more lightly, or
        who already vape comfortably at a lower strength on another brand, often find 5mg or 10mg
        gives them enough without feeling too strong. If you're already vaping happily at a given
        strength and are only switching flavour or brand, sticking with a similar strength is
        usually the simplest move. None of this is a guarantee for any individual, since how much
        nicotine someone needs to feel satisfied varies a good deal from person to person.
      </P>

      <H2>Why do nic salts feel smoother than freebase at the same strength?</H2>
      <P>
        Nic salt formulations are generally described as giving a smoother throat hit than
        traditional freebase nicotine at an equivalent strength, which is a widely stated
        formulation characteristic rather than a claim about safety. That's part of why nic salt
        e-liquids are commonly sold at strengths up to the UK's 20mg/ml cap, while{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          freebase nicotine
        </Link>{" "}
        is usually sold lower, since freebase tends to feel harsher when inhaled deeply at high
        strength. It's also why nic salts are the more common choice in the tighter-draw{" "}
        <Link
          href="/questions/mtl-and-dtl-what-do-these-terms-mean"
          className="font-semibold underline underline-offset-4"
        >
          MTL pod kits
        </Link>{" "}
        many people switching from smoking start out on, rather than the looser, sub-ohm setups
        built for freebase e-liquid.
      </P>

      <Callout label="Worth knowing">
        If you find a strength leaves you wanting more, or gives you a headachy, harsh feeling,
        that's usually a sign to adjust rather than push through it. Moving down a step tends to
        settle a too-strong hit; moving up a step tends to settle persistent cravings. Either way,
        treat it as trial and error over your first few bottles rather than something to get right
        immediately.
      </Callout>

      <H2>Practical advice: start lower, step up only if you need to</H2>
      <P>
        If you're new to nic salts, or simply unsure which strength to pick, starting lower and
        moving up only if you need to is generally the more comfortable route than starting high
        and finding it too much. A 10ml bottle such as{" "}
        <a
          href="https://localsupplies.co.uk/collections/elux-nic-salts"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4"
        >
          Elux vape liquid 5mg
        </a>{" "}
        is a common lower-strength starting point, and because 5mg, 10mg and 20mg are sold in the
        same bottle size and formulation across the range, moving up a strength later doesn't mean
        changing flavour or brand, just picking up the next mg option in the same line. Give a
        strength a few days of normal use before deciding it's wrong; a single tank isn't always
        enough to judge.
      </P>
      <P>
        This applies just as much to vapers switching between devices as to anyone quitting
        smoking. A pod kit such as the{" "}
        <Link
          href="/questions/al-fakher-50k-your-questions-answered"
          className="font-semibold underline underline-offset-4"
        >
          Al Fakher 50K
        </Link>{" "}
        also uses nic salts up to the UK's 20mg/ml cap, so the same start-low-and-adjust approach
        applies whichever pod kit or refillable device you're pairing the e-liquid with.
      </P>

      <H2>Bottle size, price and flavour range</H2>
      <P>
        Every strength in the range comes in a 10ml bottle, the UK's standard cap for
        nicotine-containing e-liquid, typically priced around £2.49, though exact pricing varies
        by retailer. Flavours span fruit (Apple Peach, Blueberry Raspberry, Blue Razz Cherry),
        ice and menthol (Banana Ice, Cherry Ice, Strawberry Ice, Blackcurrant Menthol), sour and
        sweet options, and lemonade (Berry Lemonade, Pink Lemonade). The fuller flavour list, close
        to 50 options, sits at 10mg and 20mg, with a smaller run of roughly 20 flavours made
        specifically at 5mg for anyone starting at the lower end of the range.
      </P>

      <H2>The short version</H2>
      <UL>
        <LI>5mg, 10mg and 20mg are nicotine concentrations per ml, not total doses; 20mg is the UK's regulatory ceiling.</LI>
        <LI>Heavier smokers often start nearer 20mg; lighter smokers and existing vapers often find 5mg or 10mg enough.</LI>
        <LI>Nic salts are generally described as smoother than freebase at a given strength, which is why they're sold up to 20mg/ml.</LI>
        <LI>Starting lower and stepping up only if needed tends to be more comfortable than starting high.</LI>
        <LI>All three strengths come in the same 10ml bottle format, so switching strength within the range doesn't mean switching flavour.</LI>
        <LI>Nicotine needs vary from person to person, so treat any of this as general guidance, not a fixed rule for you specifically.</LI>
      </UL>
    </ArticleLayout>
  );
}
