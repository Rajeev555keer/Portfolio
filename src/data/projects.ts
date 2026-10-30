import theAlarm from "@/assets/video-the-alarm.mp4";
import divinity from "@/assets/video-3d-divinity.mp4";
import horrorThumb from "@/assets/thumb-horror-edit.jpg";
import fsDownloadThumb from "@/assets/thumb-fs23-how-to-download.jpg";
import fsWhatThumb from "@/assets/thumb-fs23-what.jpg";
import fsModThumb from "@/assets/thumb-fs23-mod.jpg";
import tractorsThumb from "@/assets/thumb-indian-tractors.jpg";

export type ProjectCategory = "Videos" | "Thumbnails";

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
  format: string;
  featured?: boolean;
};

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

export const projectFilters = ["All", "Videos", "Thumbnails"] as const;
