import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("mtl-and-dtl-what-do-these-terms-mean")!;

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
        MTL stands for mouth-to-lung: you draw vapour into your mouth first, then inhale it into
        your lungs as a second step, similar to how you'd smoke a cigarette. DTL stands for
        direct-to-lung: you pull vapour straight into your lungs in one motion, similar to a deep
        breath. The two styles feel quite different and generally use different devices, coils
        and airflow settings.
      </P>

      <H2>How the draw itself differs</H2>
      <P>
        With MTL, the draw is tighter and more restricted, close to the resistance of pulling on
        a cigarette or a straw. Vapour is held briefly in the mouth before being inhaled, which
        is part of why MTL is the style most ex-smokers find familiar when switching over.
      </P>
      <P>
        With DTL, the draw is far looser and airier. Vapour goes directly into the lungs without
        pausing in the mouth, producing noticeably larger clouds and a warmer, more open feel on
        the inhale. It's closer to breathing in deeply than to a cigarette-style puff.
      </P>

      <H2>Which devices are typically which</H2>
      <UL>
        <LI>
          <strong>MTL devices:</strong> simple pod kits and starter kits with tighter, often
          fixed airflow and higher-resistance coils, commonly above 1.0 ohm.
        </LI>
        <LI>
          <strong>DTL devices:</strong> larger tank-based mods and sub-ohm kits with fully
          adjustable airflow and low-resistance{" "}
          <Link href="/glossary" className="font-semibold underline underline-offset-4">
            coils
          </Link>
          , commonly below 1.0 ohm.
        </LI>
        <LI>
          <strong>Hybrid devices:</strong> some modern pod kits offer an airflow control that
          lets you shift between a tighter MTL-style draw and a looser, more DTL-style draw on
          the same device.
        </LI>
      </UL>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Feature</th>
            <th className="px-4 py-3 font-bold">MTL</th>
            <th className="px-4 py-3 font-bold">DTL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Draw feel</td>
            <td className="px-4 py-3">Tight, cigarette-like</td>
            <td className="px-4 py-3">Loose, deep-breath-like</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Typical coil resistance</td>
            <td className="px-4 py-3">Above 1.0 ohm</td>
            <td className="px-4 py-3">Below 1.0 ohm (sub-ohm)</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Common e-liquid type</td>
            <td className="px-4 py-3">Nic salts, higher PG</td>
            <td className="px-4 py-3">Freebase, higher VG</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Vapour output</td>
            <td className="px-4 py-3">Modest</td>
            <td className="px-4 py-3">Large clouds</td>
          </tr>
          <tr>
            <td className="px-4 py-3">Best suited to</td>
            <td className="px-4 py-3">New vapers, ex-smokers</td>
            <td className="px-4 py-3">Experienced sub-ohm vapers</td>
          </tr>
        </tbody>
      </Table>

      <Callout label="Worth knowing">
        Neither style is objectively better; it's a matter of preference and what feels most
        natural. Many people who've recently stopped smoking find MTL kits an easier starting
        point precisely because the draw resistance is familiar, though this is a general
        pattern rather than a rule.
      </Callout>

      <H2>Mini-glossary of related terms</H2>
      <P>
        A handful of terms tend to come up alongside MTL and DTL. Here's what each means in
        plain English.
      </P>
      <UL>
        <LI>
          <strong>Coil:</strong> the replaceable part that heats e-liquid into vapour, containing
          a resistance wire wrapped around a cotton wick.
        </LI>
        <LI>
          <strong>Ohms:</strong> the unit of electrical resistance printed on a coil; lower
          numbers mean more power flows through and more vapour is produced.
        </LI>
        <LI>
          <strong>Sub-ohm:</strong> a coil with resistance below 1.0 ohm, used almost exclusively
          for DTL vaping.
        </LI>
        <LI>
          <strong>Nic salt:</strong> a form of nicotine that's smoother at higher strengths,
          commonly used in MTL pod kits.
        </LI>
        <LI>
          <strong>Freebase (nicotine):</strong> the traditional nicotine form, usually sold at
          lower strengths because it feels harsher when inhaled deeply.
        </LI>
        <LI>
          <strong>Airflow:</strong> the adjustable vent controlling how much air mixes with
          vapour on the draw, which is largely what defines whether a hit feels MTL or DTL.
        </LI>
      </UL>

      <H2>Why the distinction matters when buying a kit</H2>
      <P>
        Picking a kit that matches the draw style you actually want avoids a lot of frustration.
        A tight MTL pod loaded with high-VG e-liquid can struggle to wick properly, and a loose
        DTL mod loaded with nic salts at a strength meant for MTL use can deliver far more
        nicotine per puff than intended. If you're unsure, a UK vape shop can usually let you try
        the draw resistance of a floor model before you buy, and can advise on{" "}
        <Link
          href="/questions/why-does-my-vape-taste-burnt"
          className="font-semibold underline underline-offset-4"
        >
          why a new setup might taste burnt
        </Link>{" "}
        if the coil and e-liquid don't suit each other. UK-regulated nicotine e-liquid is capped
        at 20mg/ml under the Tobacco and Related Products Regulations, with a 10ml limit on
        nicotine-containing bottles and a 2ml limit on pre-filled pods and cartridges, regardless
        of which draw style you choose.
      </P>
    </ArticleLayout>
  );
}
