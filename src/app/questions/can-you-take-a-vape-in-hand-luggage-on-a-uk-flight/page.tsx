import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, P, UL, LI, Table, Callout } from "@/components/ArticleBits";
import { getArticle } from "@/lib/articles";

const article = getArticle("can-you-take-a-vape-in-hand-luggage-on-a-uk-flight")!;

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
        Yes. UK aviation rules require vapes, e-cigarettes and any spare batteries to travel in
        your hand luggage, never in the hold. GOV.UK's own hand luggage guidance lists
        e-cigarettes as permitted in the cabin and not permitted in checked luggage, and the Civil
        Aviation Authority tells passengers to always keep vapes, spare batteries and power banks
        with them in the cabin rather than packing them into a hold bag.
      </P>

      <H2>Why it has to be hand luggage, never the hold</H2>
      <P>
        The restriction is about the lithium battery inside the device, not the vape itself.
        Lithium batteries can, in rare cases, overheat and catch fire. In the cabin, crew can see
        and respond to that within seconds. In the hold, a fire could burn unnoticed for far
        longer before anyone realises. That's the reasoning behind the rule from the UK Civil
        Aviation Authority (CAA) and behind almost every major airline's own policy: vapes,
        e-cigarettes and spare batteries are cabin-only items.
      </P>

      <Table>
        <thead>
          <tr className="border-b-2 border-[var(--color-ink)] bg-[var(--color-accent)]">
            <th className="px-4 py-3 font-bold">Item</th>
            <th className="px-4 py-3 font-bold">Hand luggage</th>
            <th className="px-4 py-3 font-bold">Hold luggage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Vape device / e-cigarette</td>
            <td className="px-4 py-3">Yes</td>
            <td className="px-4 py-3">No</td>
          </tr>
          <tr className="border-b border-[var(--color-ink)]/30">
            <td className="px-4 py-3">Spare batteries</td>
            <td className="px-4 py-3">Yes, terminals protected</td>
            <td className="px-4 py-3">No</td>
          </tr>
          <tr>
            <td className="px-4 py-3">E-liquid</td>
            <td className="px-4 py-3">Yes, within the liquid limit</td>
            <td className="px-4 py-3">Check with your airline</td>
          </tr>
        </tbody>
      </Table>

      <H2>What to do with the device before you fly</H2>
      <UL>
        <LI>
          Switch it off completely, or use its lock function if it has one, so it can't fire
          accidentally while it's in your bag.
        </LI>
        <LI>
          Don't charge the device or any spare batteries on board the aircraft, in the cabin or at
          the gate while boarding.
        </LI>
        <LI>
          Carry spare batteries individually protected, for example in their original packaging or
          a battery case, so the terminals can't short against keys or coins.
        </LI>
        <LI>
          Keep the device and its batteries with you in the cabin rather than checking them in
          separately, even if the rest of your luggage goes in the hold.
        </LI>
      </UL>

      <H2>Spare batteries: what the limits actually are</H2>
      <P>
        Most pod kits use a small built-in battery that never needs to travel separately, so this
        mostly matters for mod users who carry spare cells such as 18650 or 21700 batteries. CAA
        guidance requires spare batteries to be individually protected against short-circuiting,
        for example in a hard battery case or their original packaging, rather than loose in a
        pocket or bag alongside keys or coins. For power banks specifically, CAA rules set a limit
        of two per passenger and a 100 watt-hour (Wh) threshold above which you'd need the
        airline's approval; batteries over 160Wh aren't permitted in passenger baggage at all.
        Standalone spare vape batteries are generally well under these thresholds, but airlines
        can and do set their own stricter limits, so it's worth checking your airline's dangerous
        goods policy if you're travelling with more than one or two spares.
      </P>

      <H2>Connecting flights and other countries' rules</H2>
      <P>
        Everything above covers the rules for departing from a UK airport. If your journey
        involves a connecting flight, or you're landing somewhere other than the UK, remember that
        other countries and airlines set their own vaping laws, which can be considerably
        stricter than the UK's, including outright bans on vapes or nicotine e-liquid in some
        destinations. The hand-luggage-only rule for batteries is close to universal because it's
        driven by the same fire-risk physics everywhere, but whether you're allowed to bring the
        device or e-liquid into the country at all is a separate question worth checking for your
        specific destination and any layover before you fly.
      </P>

      <H2>E-liquid and the liquid rules</H2>
      <P>
        E-liquid is a liquid like any other for security purposes, so it's covered by the same
        rules as shampoo or drinks. At most UK airports that still means containers of 100ml or
        less, carried in a single transparent resealable bag. A handful of UK airports have
        upgraded their scanners and now allow containers of up to 2 litres, with liquids left in
        your bag, but the rollout isn't complete and some airports have reverted to the 100ml
        limit after earlier trials, so it varies by airport rather than being one nationwide rule.
      </P>
      <P>
        Because of that, GOV.UK's own guidance is to check the rules at the airport you're flying
        from, any airport you're connecting through, and your return airport too, since they can
        all differ from each other. If you're travelling with{" "}
        <Link href="/glossary" className="font-semibold underline underline-offset-4">
          e-liquid
        </Link>{" "}
        bottles above 100ml on the assumption a 2-litre allowance applies, it's worth confirming
        that in advance rather than finding out at the security tray.
      </P>

      <Callout label="Worth knowing">
        The rules above cover UK departures generally, but individual airlines and airports can
        add their own conditions, particularly on nicotine strength limits at your destination or
        on connecting flights through countries with stricter vaping laws. It's always worth a
        quick check of your specific airline's and airport's own policy before you travel, rather
        than assuming UK rules apply everywhere you land.
      </Callout>

      <P>
        Since single-use disposable vapes were banned from sale in the UK from 1 June 2025, most
        UK vapers now travel with a rechargeable pod kit rather than a disposable, which is worth
        bearing in mind if you're packing an older disposable device bought before the ban: the
        same hand-luggage-only rule for its battery still applies regardless of when or where it
        was bought.
      </P>

      <H2>Practical checklist before you travel</H2>
      <UL>
        <LI>Pack the device, charger and any spare batteries in your hand luggage, not the hold.</LI>
        <LI>Switch the device off or lock it before it goes through security.</LI>
        <LI>Keep e-liquid within the container limit that applies at your departure airport.</LI>
        <LI>Don't vape or charge the device at any point during the flight.</LI>
        <LI>
          Check your specific airline's website for anything beyond the general UK rules,
          especially for connecting or return flights.
        </LI>
      </UL>
      <P>
        If you've just picked up a new device to take on a trip, it's worth running it in before
        you fly rather than testing it for the first time away from home. See{" "}
        <Link
          href="/questions/why-does-my-new-vape-taste-weird-at-first"
          className="font-semibold underline underline-offset-4"
        >
          why does my new vape taste weird at first
        </Link>{" "}
        for what to expect from a brand-new coil.
      </P>

      <H2>The short version</H2>
      <P>
        Vapes, e-cigarettes and spare batteries always travel in hand luggage on UK flights, never
        in the hold, because of the fire risk lithium batteries pose in the cargo hold. Switch the
        device off, keep spare batteries protected, don't charge anything on board, and treat
        e-liquid as a liquid subject to whatever container limit applies at your departure
        airport. Rules can vary slightly by airline and airport, so a quick check before you
        travel avoids any surprises at security.
      </P>
    </ArticleLayout>
  );
}
