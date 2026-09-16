import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, H3, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("why-does-my-vape-taste-burnt")!;

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
        A burnt taste, often called a dry hit, almost always means the cotton wick inside your{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          coil
        </Link>{" "}
        has dried out and is being scorched by the heating element rather than gently vaporising
        e-liquid. It's unpleasant but rarely a sign anything is broken beyond the coil itself,
        and in most cases it's fixable in under a minute.
      </P>

      <H2>The most common causes</H2>
      <P>
        A handful of situations account for almost every dry hit. Working through them in order
        will usually find the culprit quickly.
      </P>

      <H3>1. The e-liquid level is too low</H3>
      <P>
        If the tank or pod is running low, the wick can't draw liquid up fast enough to keep the
        coil saturated, especially near the very bottom. This is the single most common cause of
        a sudden burnt taste partway through the day. Top up before the reservoir is close to
        empty rather than waiting until it runs completely dry.
      </P>

      <H3>2. A new coil hasn't been primed</H3>
      <P>
        Every new coil needs its cotton wick soaked in e-liquid before it's fired at full power.
        Dripping a few drops of e-liquid directly onto the visible cotton, then letting the coil
        sit in a filled tank or pod for five to ten minutes, gives the wick time to fully
        saturate. Vaping on a bone-dry new coil is one of the fastest ways to scorch it
        permanently on the very first puff.
      </P>

      <H3>3. Chain vaping</H3>
      <P>
        Taking puffs back-to-back, with little or no gap between them, doesn't give the wick time
        to re-soak between hits. The coil stays hot while the surrounding liquid hasn't caught
        up, and the last few puffs in a chain start tasting progressively more burnt. Pacing
        draws a few seconds apart avoids this almost entirely.
      </P>

      <H3>4. Wattage set too high for the coil</H3>
      <P>
        Every coil has a manufacturer-recommended wattage range, usually printed on the coil
        itself or its packaging. Running well above that range heats the wick faster than it can
        resaturate, which both tastes burnt and shortens the coil's life. If you've recently
        turned the wattage up, that's worth checking first.
      </P>

      <H3>5. The wick hasn't caught up on a very new device</H3>
      <P>
        Occasionally a coil that was primed correctly still tastes slightly harsh for the first
        few puffs simply because the cotton is dense and needs a little longer to fully wet
        through. This should settle within the first few draws; if it doesn't improve, treat it
        as one of the causes above instead.
      </P>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Cause</th>
            <th className="px-4 py-3 font-bold">Quick fix</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Low e-liquid level</td>
            <td className="px-4 py-3">Top up the tank or pod before it runs low</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Unprimed new coil</td>
            <td className="px-4 py-3">Drip liquid on the cotton and wait 5&ndash;10 minutes</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Chain vaping</td>
            <td className="px-4 py-3">Space puffs a few seconds apart</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Wattage too high</td>
            <td className="px-4 py-3">Match wattage to the range printed on the coil</td>
          </tr>
          <tr>
            <td className="px-4 py-3">None of the above helps</td>
            <td className="px-4 py-3">The coil is likely at the end of its life</td>
          </tr>
        </tbody>
      </Table>

      <H2>Step-by-step: fixing a dry hit</H2>
      <UL>
        <LI>Check the e-liquid level first and top up if it's low.</LI>
        <LI>Leave the device alone for five minutes to let the wick re-soak.</LI>
        <LI>If the coil is new, confirm it was primed; if not, drip liquid onto the cotton and wait.</LI>
        <LI>Lower the wattage back to the range printed on the coil if it's been increased.</LI>
        <LI>Take single, slower puffs rather than chaining several in a row.</LI>
        <LI>If the taste is still burnt after all of the above, replace the coil.</LI>
      </UL>

      <H2>When it means the coil needs replacing</H2>
      <P>
        If a coil has been correctly primed, the tank is full, and the wattage is within range,
        but the burnt taste persists or keeps returning after each top-up, the wick has likely
        degraded past the point of recovery. Sweet or dessert-flavoured e-liquids tend to leave
        more residue on the cotton over time, which accelerates this. For general guidance on how
        long a coil should last and the signs it's time to change it, see{" "}
        <Link
          href="/questions/how-often-should-i-change-my-vape-coil"
          className="font-semibold underline underline-offset-4"
        >
          how often should I change my vape coil
        </Link>
        .
      </P>

      <Callout label="Worth knowing">
        A burnt taste is unpleasant rather than a safety fault in the device itself. If it
        happens repeatedly on brand-new coils straight out of the packet, it's more likely to be
        a priming or wattage issue than a faulty batch, so it's worth working through the checks
        above before assuming the coil itself is defective.
      </Callout>

      <H2>Keeping it from happening again</H2>
      <P>
        Most repeat dry hits come down to habits rather than the device. Priming every new coil
        properly, topping up before the tank runs low, pacing draws instead of chain vaping, and
        keeping wattage within the coil's printed range together prevent the vast majority of
        burnt-tasting hits before they start.
      </P>
    </ArticleLayout>
  );
}
