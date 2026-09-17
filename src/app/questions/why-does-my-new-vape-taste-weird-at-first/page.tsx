import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("why-does-my-new-vape-taste-weird-at-first")!;

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
        A slightly odd, metallic or plasticky taste from a brand-new{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          coil
        </Link>{" "}
        is almost always residue from manufacturing burning off during its first few uses, not a
        fault. It happens on replacement coils and on the coil already fitted inside a new pod
        kit straight out of the box. Priming it properly first, and easing it in at a lower
        wattage, is usually all that's needed to get past it.
      </P>

      <H2>Why new coils taste odd at first</H2>
      <P>
        Coils are machine-made from resistance wire wrapped around cotton wicking, then fitted
        into a metal housing and sealed. Small amounts of machining oil, adhesive used to hold the
        housing together, and dust from packaging can remain on and around the wire and cotton
        even after quality control. None of this is usually enough to matter, but the first time
        the coil is heated, that residue burns off, and you taste it as a metallic, faintly
        chemical or plasticky note sitting on top of your e-liquid's normal flavour.
      </P>
      <P>
        This is separate from a scorched, burnt taste caused by a dry wick, which is covered in{" "}
        <Link
          href="/questions/why-does-my-vape-taste-burnt"
          className="font-semibold underline underline-offset-4"
        >
          why does my vape taste burnt
        </Link>
        . Break-in taste is a background flavour alongside your e-liquid; a dry hit is a sharp,
        unpleasant scorched taste that dominates the whole puff.
      </P>

      <H2>How to prime a new coil properly</H2>
      <P>
        Priming saturates the cotton wick with e-liquid before the coil is fired at normal power,
        which both reduces break-in taste and stops the coil being damaged on its very first puff.
      </P>
      <UL>
        <LI>
          Drip a few drops of e-liquid directly onto the visible cotton on the outside of the
          coil, enough to see it darken and soak in, not enough to flood the airflow holes.
        </LI>
        <LI>
          Fit the coil into a filled tank or pod and leave it to stand for five to ten minutes
          before taking a single puff, so liquid draws fully up through the wick.
        </LI>
        <LI>
          Take a couple of gentle test draws without pressing the fire button, if your device
          allows it, to help pull liquid through before the coil actually heats.
        </LI>
        <LI>
          Start vaping at the lower end of the coil's printed wattage range for the first few
          puffs, then move up to your usual setting once the taste feels clean.
        </LI>
      </UL>
      <P>
        Skipping priming is one of the most common reasons a new coil tastes bad for longer than
        it should, and in some cases scorches the cotton permanently on the first puff.
      </P>

      <H2>Does it depend on the e-liquid or the device?</H2>
      <P>
        Break-in taste tends to be more noticeable with plainer e-liquids, such as tobacco or
        menthol flavours, simply because there's less going on to mask it. Sweeter, dessert-style
        liquids often hide it almost completely, since strong fruit or custard notes sit on top of
        the faint metallic edge. Nicotine type makes a difference to how it feels too: a{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          nic salt
        </Link>{" "}
        e-liquid, typically used in simpler pod kits, tends to read as a smoother background taste
        during break-in, while freebase nicotine at a higher strength can make any odd taste feel
        slightly sharper on the throat until it settles.
      </P>
      <P>
        The device itself matters less than the coil inside it. A brand-new pod kit and a
        brand-new sub-ohm tank both go through the same manufacturing process for their coils, so
        both can taste slightly off for the first few puffs. Larger, lower-resistance coils used
        in sub-ohm tanks sometimes take a little longer to fully wet through simply because
        there's more cotton to saturate, so it's worth giving those a slightly longer soak before
        the first puff.
      </P>

      <H2>New device smell versus new device taste</H2>
      <P>
        It's also normal for a brand-new device to have a faint plastic or rubber smell straight
        out of the box, from the housing materials and packaging rather than the coil. That smell
        usually fades within a day or two of normal handling and has nothing to do with the taste
        of the vapour itself. If the device smells odd but the vapour tastes fine once the coil is
        primed and broken in, that's the packaging, not a fault worth worrying about.
      </P>

      <H2>How long the odd taste takes to settle</H2>
      <P>
        For a coil that's been primed correctly, break-in taste should fade quickly rather than
        linger for days.
      </P>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Stage</th>
            <th className="px-4 py-3 font-bold">What's normal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">First 1&ndash;3 puffs</td>
            <td className="px-4 py-3">
              A faint metallic or plasticky note over the e-liquid flavour
            </td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Rest of the first tank</td>
            <td className="px-4 py-3">Taste fading steadily, flavour becoming clearer</td>
          </tr>
          <tr>
            <td className="px-4 py-3">By the second tank or refill</td>
            <td className="px-4 py-3">Should taste clean and match the e-liquid's own flavour</td>
          </tr>
        </tbody>
      </Table>

      <Callout label="Worth knowing">
        Priming is the single biggest factor in how noticeable break-in taste is. A coil that's
        been properly soaked before its first puff often has barely any odd taste at all, while an
        unprimed one can taste off for a lot longer and is more likely to end up scorched.
      </Callout>

      <H2>When it's not break-in: signs of a faulty coil</H2>
      <P>
        Occasionally a new coil is genuinely faulty rather than simply breaking in. It's worth
        treating it as defective, rather than continuing to wait it out, if you notice any of the
        following.
      </P>
      <UL>
        <LI>The taste is sharply burnt from the very first puff, rather than mild and metallic.</LI>
        <LI>
          A harsh or chemical taste hasn't improved at all after a full tank of properly primed
          use.
        </LI>
        <LI>The coil gurgles, spits liquid into your mouth, or leaks from the airflow.</LI>
        <LI>
          The taste gets worse over time instead of settling, even at a wattage within the coil's
          printed range.
        </LI>
      </UL>
      <P>
        If any of these apply, the coil itself is most likely defective rather than simply new.
        Swapping it for another from the same pack, or a different batch, is the quickest way to
        confirm it. For general guidance on how long a coil should last once it's bedded in and
        the signs it's due for replacement, see{" "}
        <Link
          href="/questions/how-often-should-i-change-my-vape-coil"
          className="font-semibold underline underline-offset-4"
        >
          how often should I change my vape coil
        </Link>
        .
      </P>

      <H2>Getting a new device off to a good start</H2>
      <P>
        A brief odd taste on the first few puffs of a new coil is normal and not a sign anything
        is wrong. Priming properly, easing in at a lower wattage, and giving it a full tank before
        judging the flavour will cover the vast majority of new-coil experiences. If the taste is
        still off after that, or arrives as a sharp burnt hit straight away, it's more useful to
        treat it as a faulty coil than to keep waiting for it to improve.
      </P>
    </ArticleLayout>
  );
}
