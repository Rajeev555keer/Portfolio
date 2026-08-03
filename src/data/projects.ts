import thumb1 from "@/assets/project-thumb-1.mp4";
import thumb2 from "@/assets/project-thumb-2.jpg";
import thumb3 from "@/assets/project-thumb-3.jpg";
import cinematic from "@/assets/cinematic.mp4";

export type ProjectCategory = "Videos" | "Reels" | "Thumbnails" | "Graphics";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  image: string; 
  video?: string;
  featured?: boolean;
  stat?: string;
};

export const projects: Project[] = [
  {
    id: "gaming-thumbnail",
    title: "Gaming Channel Thumbnails",
    category: "Thumbnails",
    description:
      "High-CTR YouTube thumbnail set built for a gaming channel — bold silhouettes, cyan energy lighting and clean focal hierarchy so the frame reads instantly at small sizes.",
    tools: ["Photoshop", "Canva"],
    image: thumb1,
    featured: true,
    stat: "CTR focused",
  },

  {
    id: "cinematic-edit",
    title: "Cinematic Travel Edit",
    category: "Videos",
    description:
      "Full post-production pass: story assembly, pacing, teal & orange color grade, sound design and cinematic transitions cut in DaVinci Resolve.",
    tools: ["DaVinci Resolve", "After Effects"],
    image: thumb2,

    // 👇 Ye line add ki hai
    video: cinematic,

    featured: true,
    stat: "4K / 24fps",
  },

  {
    id: "night-reel",
    title: "Night City Reel",
    category: "Reels",
    description:
      "High-retention vertical reel with beat-synced cuts, speed ramps and motion text — built for Instagram and YouTube Shorts.",
    tools: ["CapCut", "Premiere Pro"],
    image: thumb3,
    featured: true,
    stat: "9:16 vertical",
  },

  {
    id: "farming-series",
    title: "Gaming & Farming Series",
    category: "Videos",
    description:
      "Long-form YouTube series editing — commentary cleanup, B-roll layering, on-screen graphics and consistent channel branding across every episode.",
    tools: ["Premiere Pro", "Photoshop"],
    image: thumb1,
    stat: "Long-form",
  },

  {
    id: "motion-pack",
    title: "Motion Graphics Pack",
    category: "Graphics",
    description:
      "Reusable lower-thirds, subscribe animations and title cards designed in After Effects to give a channel one consistent motion language.",
    tools: ["After Effects", "Illustrator"],
    image: thumb2,
    stat: "Brand kit",
  },

  {
    id: "social-graphics",
    title: "Social Media Graphics",
    category: "Graphics",
    description:
      "Post and story graphics designed as a system — typography scale, colour rules and layout grid so every post looks like the same brand.",
    tools: ["Photoshop", "Canva"],
    image: thumb3,
    stat: "Design system",
  },

  {
    id: "shorts-batch",
    title: "Shorts Batch Production",
    category: "Reels",
    description:
      "Weekly batch of short-form cuts pulled from long-form footage, each with hook-first structure, captions and punchy sound design.",
    tools: ["CapCut", "DaVinci Resolve"],
    image: thumb3,
    stat: "Weekly batch",
  },

  {
    id: "podcast-edit",
    title: "Podcast / Talking Head Edit",
    category: "Videos",
    description:
      "Multi-cam talking-head editing with silence removal, dynamic zooms, captions and clean audio mastering.",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    image: thumb2,
    stat: "Multi-cam",
  },
];

export const projectFilters = [
  "All",
  "Videos",
  "Reels",
  "Thumbnails",
  "Graphics",
] as const;

export const showcaseStats = [
  { value: "150+", label: "Projects delivered" },
  { value: "4", label: "Years editing" },
  { value: "30+", label: "Happy creators" },
  { value: "10M+", label: "Views edited" },
];
