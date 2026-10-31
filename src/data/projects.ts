import theAlarm from "@/assets/video-the-alarm.mp4";
import divinity from "@/assets/video-3d-divinity.mp4";
import lcubePromo from "@/assets/video-lcube-ca-final-promo.mp4";
import lcubePromoPoster from "@/assets/poster-video-lcube-ca-final-promo.jpg";
import ankitIntro from "@/assets/video-ankit-channel-intro.mp4";
import ankitIntroPoster from "@/assets/poster-video-ankit-channel-intro.jpg";
import journalEntries from "@/assets/reel-journal-entries.mp4";
import journalEntriesPoster from "@/assets/poster-reel-journal-entries.jpg";
import mobileVsBook from "@/assets/reel-mobile-vs-book.mp4";
import mobileVsBookPoster from "@/assets/poster-reel-mobile-vs-book.jpg";
import top6Tips from "@/assets/reel-top-6-exam-tips.mp4";
import top6TipsPoster from "@/assets/poster-reel-top-6-exam-tips.jpg";
import insurance from "@/assets/reel-term-vs-health-insurance.mp4";
import insurancePoster from "@/assets/poster-reel-term-vs-health-insurance.jpg";
import caProblems from "@/assets/reel-ca-student-problems.mp4";
import caProblemsPoster from "@/assets/poster-reel-ca-student-problems.jpg";
import horrorThumb from "@/assets/thumb-horror-edit.jpg";
import fsDownloadThumb from "@/assets/thumb-fs23-how-to-download.jpg";
import fsWhatThumb from "@/assets/thumb-fs23-what.jpg";
import fsModThumb from "@/assets/thumb-fs23-mod.jpg";
import tractorsThumb from "@/assets/thumb-indian-tractors.jpg";

export type ProjectCategory = "Videos" | "Reels" | "Thumbnails";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  /** Still image. Video projects without one show a frame of the clip instead. */
  image?: string;
  video?: string;
  /** Second of the clip to show as the card poster when there is no image. */
  posterTime?: number;
  /** 9:16 short-form footage; gets a portrait card and player. */
  vertical?: boolean;
  format: string;
  featured?: boolean;
};

// Keep each category contiguous: the grid mixes landscape and portrait card
// widths, and grouping keeps every row the same shape.
export const projects: Project[] = [
  {
    id: "the-alarm",
    title: "The Alarm — Cinematic Teaser",
    category: "Videos",
    description:
      "A short cinematic teaser built on mood: a cold teal grade, slow push-ins, practical light and a bold title card timed to the sound design.",
    tools: ["DaVinci Resolve", "After Effects"],
    video: theAlarm,
    posterTime: 7,
    format: "16:9 · 12s",
    featured: true,
  },
  {
    id: "3d-divinity",
    title: "When 3D Art Meets Divinity",
    category: "Videos",
    description:
      "A 3D cinematic that moves from a temple environment to a glowing Shiva reveal — camera moves, light rays and a slow, reverent edit rhythm.",
    tools: ["Unreal Engine", "DaVinci Resolve"],
    video: divinity,
    posterTime: 16,
    format: "16:9 · 23s",
    featured: true,
  },
  {
    id: "lcube-ca-final-promo",
    title: "Life Long Learners — CA Final Promo",
    category: "Videos",
    description:
      "Brand promo for the L-Cube CA Final batch — animated logo reveal, a photo-collage sequence linked with red string, and bold kinetic titles introducing the faculty.",
    tools: ["Premiere Pro"],
    video: lcubePromo,
    image: lcubePromoPoster,
    format: "16:9 · 1:08",
  },
  {
    id: "ankit-channel-intro",
    title: "CA Ankit Pandey — Channel Intro",
    category: "Videos",
    description:
      "A 13-second YouTube channel intro — animated search bar, cut-out portrait over photo cards, a subscribe-button click and the channel card reveal.",
    tools: ["Premiere Pro"],
    video: ankitIntro,
    image: ankitIntroPoster,
    format: "16:9 · 13s",
  },
  {
    id: "journal-entries",
    title: "Journal Entries Cheat Sheet",
    category: "Reels",
    description:
      "Accounting basics as a short — real-life B-roll for each transaction, animated Dr./Cr. journal-entry cards and punchy word-by-word captions.",
    tools: [],
    video: journalEntries,
    image: journalEntriesPoster,
    vertical: true,
    format: "9:16 · 38s",
    featured: true,
  },
  {
    id: "mobile-vs-book",
    title: "Mobile vs Book",
    category: "Reels",
    description:
      "Two-person skit with a split-screen green-vs-red list that builds point by point in sync with the dialogue.",
    tools: ["Premiere Pro"],
    video: mobileVsBook,
    image: mobileVsBookPoster,
    vertical: true,
    format: "9:16 · 23s",
    featured: true,
  },
  {
    id: "top-6-exam-tips",
    title: "Top 6 Exam Tips — ICAI Mock Papers",
    category: "Reels",
    description:
      "Talking-head exam-prep short — highlighted Hindi captions, ICAI website B-roll and torn-paper transitions keep an 80-second explainer moving.",
    tools: ["Premiere Pro"],
    video: top6Tips,
    image: top6TipsPoster,
    vertical: true,
    format: "9:16 · 1:23",
    featured: true,
  },
  {
    id: "term-vs-health-insurance",
    title: "Term vs Health Insurance",
    category: "Reels",
    description:
      "Personal-finance explainer shot selfie-style — tight jump cuts plus animated bill and calculator graphics that make each point visual.",
    tools: ["Premiere Pro"],
    video: insurance,
    image: insurancePoster,
    vertical: true,
    format: "9:16 · 1:01",
  },
  {
    id: "ca-student-problems",
    title: "Problems CA Students Face Before Exams",
    category: "Reels",
    description:
      "Office talking-head short for the last 25–30 days before CA exams — sticky-note graphics, Hindi captions and focus-pull transitions.",
    tools: ["Premiere Pro"],
    video: caProblems,
    image: caProblemsPoster,
    vertical: true,
    format: "9:16 · 42s",
  },
  {
    id: "horror-edit",
    title: "Horror Edit",
    category: "Thumbnails",
    description:
      "Moonlit horror thumbnail — subject lit by a warm lantern against a cold room, with the ghost placed in the second read so the frame tells a story.",
    tools: ["Photoshop"],
    image: horrorThumb,
    format: "YouTube · 16:9",
    featured: true,
  },
  {
    id: "fs23-how-to-download",
    title: "Farming Simulator 23 — How to Download",
    category: "Thumbnails",
    description:
      "Bright, clean gameplay thumbnail with a cut-out subject and a pointing gesture that leads the eye straight to the tractor and title.",
    tools: ["Photoshop"],
    image: fsDownloadThumb,
    format: "YouTube · 16:9",
    featured: true,
  },
  {
    id: "fs23-what",
    title: "Farming Simulator 23 — “What?!”",
    category: "Thumbnails",
    description:
      "Curiosity-first thumbnail — a reaction pose, a hand-drawn speech bubble and a mid-air tractor create a question the viewer wants answered.",
    tools: ["Photoshop"],
    image: fsWhatThumb,
    format: "YouTube · 16:9",
  },
  {
    id: "fs23-mod",
    title: "Farming Simulator 23 Mod — Direct Download",
    category: "Thumbnails",
    description:
      "Big outlined headline, a handwritten “23 mod” callout and an arrow that ties the text to the gameplay — readable even at phone size.",
    tools: ["Photoshop"],
    image: fsModThumb,
    format: "YouTube · 16:9",
  },
  {
    id: "indian-tractors",
    title: "Indian Tractors — Mobile Gameplay",
    category: "Thumbnails",
    description:
      "High-contrast yellow type stacked over a sunny gameplay scene, with the subject framed on the right to balance the composition.",
    tools: ["Photoshop"],
    image: tractorsThumb,
    format: "YouTube · 16:9",
  },
];

export const projectFilters = ["All", "Videos", "Reels", "Thumbnails"] as const;
