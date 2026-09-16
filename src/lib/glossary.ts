export interface GlossaryTerm {
  term: string;
  definition: string;
}

// Ordered alphabetically. The homepage teaser grid shows a fixed subset of six.
export const glossary: GlossaryTerm[] = [
  {
    term: "Airflow",
    definition:
      "The adjustable vent on a tank or pod that controls how much air mixes with vapour on the draw. More open airflow gives a looser, airier DTL-style pull; more restricted airflow gives a tighter MTL-style pull.",
  },
  {
    term: "Chain vaping",
    definition:
      "Taking puffs back-to-back with little or no gap between them, so the coil doesn't get time to re-soak with e-liquid. A common cause of dry, burnt-tasting hits.",
  },
  {
    term: "Coil",
    definition:
      "The replaceable part inside a tank or pod that contains a length of resistance wire wrapped around (or through) a cotton wick. It heats the e-liquid to produce vapour and wears out over time.",
  },
  {
    term: "DTL (direct-to-lung)",
    definition:
      "A vaping style where vapour is pulled straight into the lungs in one motion, similar to a deep breath. Typically used with sub-ohm coils, looser airflow and higher-VG e-liquid.",
  },
  {
    term: "Dry hit",
    definition:
      "An unpleasant, scorched-tasting puff caused by the wick not having enough e-liquid on it when the coil fires. A sign to check e-liquid level, priming, or coil age.",
  },
  {
    term: "E-liquid",
    definition:
      "The liquid that's vaporised in a vape device, generally made up of propylene glycol (PG), vegetable glycerine (VG), flavourings, and optionally nicotine. UK-regulated nicotine e-liquid is capped at 20mg/ml.",
  },
  {
    term: "Freebase (nicotine)",
    definition:
      "The traditional form of nicotine used in e-liquids before nic salts became common. It tends to feel harsher at higher strengths, which is why freebase e-liquids are usually sold at lower nicotine strengths than nic salts.",
  },
  {
    term: "MTL (mouth-to-lung)",
    definition:
      "A vaping style where vapour is drawn into the mouth first, then inhaled into the lungs, similar to smoking a cigarette. Typically used with higher-resistance coils and tighter airflow.",
  },
  {
    term: "Nic salt",
    definition:
      "A form of nicotine (nicotine salt) that's smoother on the throat at higher strengths than freebase nicotine, which is why nic salt e-liquids are popular in the lower-power pod kits many ex-smokers start with.",
  },
  {
    term: "Ohms",
    definition:
      "The unit of electrical resistance printed on a coil (for example 0.4Ω or 1.2Ω). Lower resistance coils generally run at higher wattage and produce warmer, more vapour-dense hits; higher resistance coils suit lower-power MTL vaping.",
  },
  {
    term: "Pod kit",
    definition:
      "A small, simple vape device that uses a refillable or replaceable pod instead of a separate tank. Most modern UK pod kits are rechargeable and refillable, since single-use disposable vapes were banned from sale from 1 June 2025.",
  },
  {
    term: "Priming (a coil)",
    definition:
      "Saturating a new coil's wick with e-liquid before first use, usually by dripping liquid directly onto the visible cotton and letting it sit for several minutes. Skipping this step is a common cause of a burnt first few puffs.",
  },
  {
    term: "Sub-ohm",
    definition:
      "A coil with resistance below 1.0 ohm. Sub-ohm coils need more power and higher-VG e-liquid, and are generally paired with DTL, looser-airflow devices rather than tight MTL pod kits.",
  },
  {
    term: "Wattage",
    definition:
      "The power a device sends to the coil, shown in watts (W). Every coil has a manufacturer-recommended wattage range printed on it or its packaging; running above that range accelerates wear and increases the risk of a burnt taste.",
  },
];

export const homepageTeaserTerms = [
  "MTL (mouth-to-lung)",
  "DTL (direct-to-lung)",
  "Coil",
  "Sub-ohm",
  "Nic salt",
  "Dry hit",
];
