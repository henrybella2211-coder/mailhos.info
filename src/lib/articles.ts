export type Category = "Basics" | "Troubleshooting" | "Terminology" | "Rules & Travel";

export interface ArticleMeta {
  slug: string;
  title: string;
  category: Category;
  shortAnswer: string;
  excerpt: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  dateModifiedDisplay: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  relatedSlugs: string[];
}

export const articles: ArticleMeta[] = [
  {
    slug: "why-does-my-vape-taste-burnt",
    title: "Why does my vape taste burnt?",
    category: "Troubleshooting",
    shortAnswer:
      "A burnt taste almost always means the cotton wick inside your coil has dried out and is being scorched by the heating element. This usually happens when too little e-liquid is reaching the coil, when a new coil hasn't had time to soak, or when you're chain vaping faster than the wick can re-saturate.",
    excerpt:
      "Dry hits explained: the real causes of a burnt taste, from low e-liquid to chain vaping, and the step-by-step fixes that actually work.",
    readTime: "5 min read",
    datePublished: "2025-11-03",
    dateModified: "2026-09-10",
    dateModifiedDisplay: "10 September 2026",
    image: {
      src: "/images/vape-pod-mod-burnt-hit.jpg",
      alt: "Close-up of a black pod mod device resting on a dark wooden surface",
      width: 1400,
      height: 933,
    },
    relatedSlugs: [
      "how-often-should-i-change-my-vape-coil",
      "mtl-and-dtl-what-do-these-terms-mean",
      "why-does-my-new-vape-taste-weird-at-first",
    ],
  },
  {
    slug: "mtl-and-dtl-what-do-these-terms-mean",
    title: "MTL and DTL: what do these terms actually mean?",
    category: "Terminology",
    shortAnswer:
      "MTL (mouth-to-lung) means drawing vapour into your mouth first, then inhaling it into your lungs, similar to smoking a cigarette. DTL (direct-to-lung) means pulling vapour straight into your lungs in one motion, similar to a deep breath. MTL kits use tighter airflow and higher-resistance coils; DTL kits use looser airflow and sub-ohm coils.",
    excerpt:
      "A full terminology explainer covering mouth-to-lung versus direct-to-lung vaping, draw resistance, device types, and a mini-glossary of related terms.",
    readTime: "6 min read",
    datePublished: "2025-10-20",
    dateModified: "2026-09-08",
    dateModifiedDisplay: "8 September 2026",
    image: {
      src: "/images/vape-mod-wooden-table-terminology.jpg",
      alt: "Compact vape mod device with an e-liquid bottle on a wooden table",
      width: 1400,
      height: 934,
    },
    relatedSlugs: ["why-does-my-vape-taste-burnt", "how-often-should-i-change-my-vape-coil"],
  },
  {
    slug: "how-often-should-i-change-my-vape-coil",
    title: "How often should I change my vape coil?",
    category: "Basics",
    shortAnswer:
      "There's no fixed number of days that suits everyone. As a broad guide, many vapers find a coil lasts roughly one to two weeks of regular use, though sweeter e-liquids and heavy use can shorten that considerably. The clearest signal isn't the calendar, it's the taste: once flavour turns muted, harsh or faintly burnt, the coil needs replacing.",
    excerpt:
      "General guidance on coil lifespan, why dessert and sweet e-liquids gunk coils up faster, and practical habits that help a coil last longer.",
    readTime: "5 min read",
    datePublished: "2025-12-01",
    dateModified: "2026-09-12",
    dateModifiedDisplay: "12 September 2026",
    image: {
      src: "/images/vape-device-coil-replacement.jpg",
      alt: "Grey pod vape device held upright showing its refill and coil compartment",
      width: 1400,
      height: 2100,
    },
    relatedSlugs: ["why-does-my-vape-taste-burnt", "mtl-and-dtl-what-do-these-terms-mean"],
  },
  {
    slug: "why-does-my-new-vape-taste-weird-at-first",
    title: "Why does my new vape taste weird at first?",
    category: "Troubleshooting",
    shortAnswer:
      "A slightly odd, metallic or plasticky taste from a brand-new coil is almost always residue from manufacturing burning off during the first few uses, not a fault. Priming the coil properly before you vape on it, and giving it a few puffs at a lower wattage, usually clears the taste within the first tank. If a harsh or chemical taste doesn't improve after a full tank, or is joined by gurgling or leaking, that points to a faulty coil rather than normal break-in.",
    excerpt:
      "New-coil break-in taste explained: why it happens, how to prime a coil properly before first use, how long it should take to settle, and when it signals a faulty coil.",
    readTime: "6 min read",
    datePublished: "2026-08-22",
    dateModified: "2026-09-15",
    dateModifiedDisplay: "15 September 2026",
    image: {
      src: "/images/vape-device-new-coil-first-use.jpg",
      alt: "Close-up of a vape mod and tank with its display lit up and vapour drifting past",
      width: 1400,
      height: 2100,
    },
    relatedSlugs: ["why-does-my-vape-taste-burnt", "how-often-should-i-change-my-vape-coil"],
  },
  {
    slug: "can-you-take-a-vape-in-hand-luggage-on-a-uk-flight",
    title: "Can you take a vape in hand luggage on a UK flight?",
    category: "Rules & Travel",
    shortAnswer:
      "Yes. UK aviation rules require vapes, e-cigarettes and any spare batteries to travel in hand luggage, never in the hold, because of the fire risk lithium batteries pose in the cargo hold. The device should be switched off (or locked, if it has a lock function) so it can't activate by accident, and must not be charged on board. E-liquid counts as a liquid, so it needs to fit within the liquid container limit that applies at your departure airport.",
    excerpt:
      "UK rules on flying with a vape: why it must go in hand luggage and never the hold, the e-liquid liquid limit, and what to check before you travel.",
    readTime: "6 min read",
    datePublished: "2026-08-28",
    dateModified: "2026-09-17",
    dateModifiedDisplay: "17 September 2026",
    image: {
      src: "/images/vape-airport-terminal-suitcase-flight-board.jpg",
      alt: "Hard-shell suitcase in an airport terminal with departure boards in the background",
      width: 1400,
      height: 1867,
    },
    relatedSlugs: ["why-does-my-new-vape-taste-weird-at-first"],
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(article: ArticleMeta): ArticleMeta[] {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((a): a is ArticleMeta => Boolean(a));
}

export const categoryOrder: Category[] = [
  "Basics",
  "Troubleshooting",
  "Terminology",
  "Rules & Travel",
];
