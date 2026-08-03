export type Testimonial = {
  id: string;
  name: string;
  handle: string;
  category: "YouTube" | "Reels" | "Thumbnails" | "Branding";
  rating: number;
  quote: string;
  result: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aman Verma",
    handle: "@amanplays",
    category: "YouTube",
    rating: 5,
    quote:
      "Rajeev completely changed how my channel looks. The pacing, the sound design, the colour — my videos finally feel cinematic. Retention went up from the very first edit.",
    result: "+38% average view duration",
    featured: true,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    handle: "@priya.creates",
    category: "Reels",
    rating: 5,
    quote:
      "My reels used to flop. Rajeev rebuilt the hooks and the cuts, and two of them crossed a million views in a month. Fast delivery and zero drama.",
    result: "1M+ views on 2 reels",
  },
  {
    id: "t3",
    name: "Rohit Yadav",
    handle: "@rohitgaming",
    category: "Thumbnails",
    rating: 5,
    quote:
      "The thumbnails are on another level. Clean, bold and they actually get clicked. He understands what makes a viewer stop scrolling.",
    result: "CTR 4.2% → 9.1%",
  },
  {
    id: "t4",
    name: "Sneha Patel",
    handle: "@snehastudio",
    category: "Branding",
    rating: 5,
    quote:
      "He built a full visual identity for my page — graphics, motion titles, thumbnail templates. Everything finally looks like one brand.",
    result: "Full brand kit delivered",
  },
  {
    id: "t5",
    name: "Karan Mehta",
    handle: "@karanvlogs",
    category: "YouTube",
    rating: 5,
    quote:
      "Reliable is the word. Weekly uploads, never a missed deadline, and every edit comes back better than I imagined. Feels like having a creative partner.",
    result: "52 videos, 0 missed deadlines",
  },
  {
    id: "t6",
    name: "Divya Nair",
    handle: "@divya.fit",
    category: "Reels",
    rating: 5,
    quote:
      "Sharp cuts, great captions, perfect music sync. My short-form content grew faster in three months than it did in a year.",
    result: "0 → 45K followers",
  },
];

export const testimonialFilters = [
  "All",
  "YouTube",
  "Reels",
  "Thumbnails",
  "Branding",
] as const;

export const reviewStats = [
  { value: "5.0", label: "Average rating" },
  { value: "30+", label: "Clients served" },
  { value: "98%", label: "Repeat clients" },
  { value: "24h", label: "Avg. response time" },
];