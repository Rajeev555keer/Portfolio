import type { ProjectCategory } from "./projects";

/** Options for the "Start a project" brief. */
export const briefServices = [
  { id: "reels", label: "Reels & Shorts" },
  { id: "youtube", label: "YouTube video editing" },
  { id: "cinematic", label: "Cinematic / brand film" },
  { id: "thumbnail", label: "Thumbnails" },
  { id: "motion", label: "Motion graphics" },
  { id: "graphics", label: "Social media graphics" },
] as const;

export type BriefServiceId = (typeof briefServices)[number]["id"];

export const briefVolumes = ["Just 1 video", "2–5 videos", "6–10 videos", "Monthly retainer"];

export const briefBudgets = [
  "Under ₹1,000",
  "₹1,000 – ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000+",
  "Not sure yet",
];

/** Pricing plan id → brief service, so "Order Now" opens the form pre-filled. */
export const planService: Record<string, BriefServiceId> = {
  starter: "reels",
  pro: "youtube",
  cinematic: "cinematic",
};

/** Portfolio category → the service a visitor most likely wants after seeing it. */
export const categoryService: Record<ProjectCategory, BriefServiceId> = {
  Videos: "cinematic",
  Reels: "reels",
  Thumbnails: "thumbnail",
};

export function isBriefService(value: unknown): value is BriefServiceId {
  return briefServices.some((s) => s.id === value);
}
