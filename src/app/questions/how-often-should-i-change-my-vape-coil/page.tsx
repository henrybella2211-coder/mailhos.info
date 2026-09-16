import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, H3, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("how-often-should-i-change-my-vape-coil")!;

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
        There's no fixed number of days that suits everyone, and anyone who gives you an exact
        figure is guessing. As a broad guide, many vapers find a{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          coil
        </Link>{" "}
        lasts roughly one to two weeks of regular use, though sweeter e-liquids and heavy use can
        shorten that considerably. The clearest signal isn't the calendar, it's the taste.
      </P>

      <H2>What actually determines coil lifespan</H2>

      <H3>How often you vape</H3>
      <P>
        Someone taking occasional puffs through the day will get noticeably longer out of a coil
        than someone vaping heavily and continuously. Total usage matters more than the number of
        days that have passed since it was fitted.
      </P>

      <H3>The type of e-liquid</H3>
      <P>
        Sweeter, dessert-style or heavily flavoured e-liquids tend to leave more residue on the
        cotton wick, which gunks up the coil and dulls the flavour faster than plainer,
        tobacco-style or menthol liquids. Higher-VG liquids can also be slightly harder work for
        some coils than higher-PG ones, since VG is thicker.
      </P>

      <H3>Wattage and device settings</H3>
      <P>
        Running a coil above its recommended wattage range wears it out faster. Staying within
        the range printed on the coil or its packaging is one of the simplest ways to extend its
        working life.
      </P>

      <H3>Priming and general habits</H3>
      <P>
        A coil that wasn't primed properly, or that's regularly chain vaped without breaks, tends
        to degrade faster than one that's been looked after. See{" "}
        <Link
          href="/questions/why-does-my-vape-taste-burnt"
          className="font-semibold underline underline-offset-4"
        >
          why does my vape taste burnt
        </Link>{" "}
        for the full detail on priming and chain vaping.
      </P>

      <H2>The real signal: taste, not time</H2>
      <P>
        Rather than watching the calendar, pay attention to how the vapour tastes and feels.
        Three changes usually show up in this rough order as a coil nears the end of its life.
      </P>
      <UL>
        <LI>Flavour starts to feel muted or flat compared with a fresh coil.</LI>
        <LI>The taste turns slightly harsh or gets a faint burnt edge, even with a full tank.</LI>
        <LI>Vapour production drops noticeably, or the device starts gurgling or leaking.</LI>
      </UL>
      <P>
        Once flavour is consistently muted, harsh or faintly burnt despite the tank being full
        and the wattage being correct, it's time to fit a new coil rather than trying to
        troubleshoot further.
      </P>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Usage pattern</th>
            <th className="px-4 py-3 font-bold">Rough guide (general, not exact)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Light, occasional use, plainer e-liquid</td>
            <td className="px-4 py-3">Can often stretch beyond two weeks</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Regular daily use, mixed e-liquids</td>
            <td className="px-4 py-3">Roughly one to two weeks</td>
          </tr>
          <tr>
            <td className="px-4 py-3">Heavy use or sweet dessert e-liquids</td>
            <td className="px-4 py-3">Often under a week</td>
          </tr>
        </tbody>
      </Table>

      <Callout label="Worth knowing">
        These ranges are general guidance based on common patterns UK vapers report, not a
        laboratory measurement or a manufacturer guarantee. Two people using the same device and
        e-liquid can still get different results depending on wattage, puff length and how well
        the coil was primed.
      </Callout>

      <H2>How to make a coil last longer</H2>
      <UL>
        <LI>Prime every new coil fully before vaping on it at normal power.</LI>
        <LI>Keep the tank or pod topped up rather than letting it run near empty.</LI>
        <LI>Avoid chain vaping; space draws out so the wick can re-soak.</LI>
        <LI>Stick to the wattage range printed on the coil.</LI>
        <LI>Rinse and dry a rebuildable or refillable pod between coil changes if it's visibly gunked.</LI>
      </UL>

      <H2>When to just replace it</H2>
      <P>
        If you've worked through the fixes above and the taste hasn't improved, the coil has
        reached the end of its useful life and no amount of adjusting wattage or topping up will
        bring the flavour back. Pod kits and tanks are designed around routine coil changes as
        standard maintenance, so keeping a spare or two on hand avoids being caught out.
      </P>
    </ArticleLayout>
  );
}
