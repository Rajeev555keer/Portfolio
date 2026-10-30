export type Plan = {
  id: string;
  name: string;
  blurb: string;
  perVideo: string;
  monthly: string;
  monthlyNote: string;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Reels & Shorts",
    blurb: "Short-form content built for retention and reach.",
    perVideo: "₹499",
    monthly: "₹7,999",
    monthlyNote: "20 reels / month",
    features: [
      "Up to 60 seconds",
      "Hook-first structure",
      "Beat-synced cuts & transitions",
      "Captions & sound design",
      "2 revisions",
      "24–48h delivery",
    ],
  },
  {
    id: "pro",
    name: "YouTube Video Editing",
    blurb: "Full long-form post-production for serious creators.",
    perVideo: "₹1,499",
    monthly: "₹9,599",
    monthlyNote: "8 videos / month",
    popular: true,
    features: [
      "Up to 20 minutes",
      "Story-driven cut & pacing",
      "Colour grading + audio mastering",
      "B-roll, motion graphics & SFX",
      "1 free thumbnail per video",
      "3 revisions",
      "48–72h delivery",
    ],
  },
  {
    id: "cinematic",
    name: "Cinematic & Brand Films",
    blurb: "High-end edits where every frame has to land.",
    perVideo: "₹3,999",
    monthly: "₹12,799",
    monthlyNote: "4 films / month",
    features: [
      "Cinematic grade in DaVinci Resolve",
      "Advanced motion graphics (After Effects)",
      "Custom titles & transitions",
      "Licensed music & full sound design",
      "Unlimited revisions",
      "Priority scheduling",
    ],
  },
];

export const addOns = [
  { name: "YouTube Thumbnail", price: "₹299", note: "High-CTR custom design" },
  {
    name: "Motion Graphics Pack",
    price: "₹1,299",
    note: "Titles, lower-thirds, outro",
  },
  { name: "Rush Delivery (24h)", price: "+40%", note: "Jump the queue" },
  { name: "Social Graphics Set", price: "₹899", note: "10 posts / stories" },
  {
    name: "Channel Branding Kit",
    price: "₹2,499",
    note: "Banner, logo, templates",
  },
  { name: "Subtitles / Captions", price: "₹199", note: "Per video, styled" },
];

export const comparison = [
  { feature: "Colour grading", starter: false, pro: true, cinematic: true },
  { feature: "Motion graphics", starter: false, pro: true, cinematic: true },
  {
    feature: "Captions & subtitles",
    starter: true,
    pro: true,
    cinematic: true,
  },
  { feature: "Free thumbnail", starter: false, pro: true, cinematic: true },
  {
    feature: "Unlimited revisions",
    starter: false,
    pro: false,
    cinematic: true,
  },
  { feature: "Priority support", starter: false, pro: true, cinematic: true },
];

export const services = [
  {
    title: "Video Editing",
    description: "YouTube videos, cinematic edits, storytelling and professional post-production.",
    icon: "Film",
  },
  {
    title: "Reels & Shorts",
    description: "High-retention short-form content optimized for social media.",
    icon: "Smartphone",
  },
  {
    title: "Thumbnail Design",
    description: "High-CTR YouTube thumbnail design.",
    icon: "Image",
  },
  {
    title: "Motion Graphics",
    description: "After Effects style motion graphics and visual effects.",
    icon: "Sparkles",
  },
  {
    title: "Graphic Design",
    description: "Professional social media and digital graphics.",
    icon: "PenTool",
  },
  {
    title: "Creative Support",
    description: "Long-term editing and creative support for creators and brands.",
    icon: "Handshake",
  },
] as const;

export const faqs = [
  {
    q: "How long does one video take?",
    a: "Reels and shorts are usually delivered within 24–48 hours. Long-form YouTube videos take 48–72 hours, and cinematic projects depend on length and complexity — you always get a clear timeline before we start.",
  },
  {
    q: "How do I send my footage?",
    a: "Google Drive, Dropbox or WeTransfer all work. Share the folder link along with any references, music or brand assets and I'll take it from there.",
  },
  {
    q: "How many revisions do I get?",
    a: "Two revisions on short-form, three on long-form and unlimited on cinematic projects. Revisions cover pacing, text, music and colour — a full re-edit counts as a new project.",
  },
  {
    q: "Do you design thumbnails too?",
    a: "Yes. Every long-form edit includes one custom thumbnail, and extra thumbnails can be added at any time. Thumbnails can also be ordered on their own.",
  },
  {
    q: "Do you work on a monthly basis?",
    a: "Yes — a monthly retainer reserves a fixed slot in my schedule every week, so your uploads never wait in a queue. See the Monthly Retainer option on the pricing page.",
  },
  {
    q: "How do payments work?",
    a: "50% upfront and 50% on delivery for one-off projects, and monthly in advance for retainers. UPI, bank transfer and international payments are all accepted.",
  },
];

export const experience = [
  {
    year: "2022",
    title: "Started Video Editing Journey",
    body: "Started learning video editing and graphic designing. Worked on YouTube videos, thumbnails and basic motion graphics.",
  },
  {
    year: "2023",
    title: "YouTube Content Creator",
    body: "Created gaming and farming content. Learned advanced editing techniques, thumbnail designing and audience growth.",
  },
  {
    year: "2024",
    title: "Professional Video Editor",
    body: "Working with DaVinci Resolve, Premiere Pro, After Effects and CapCut. Created cinematic videos, reels and social media content.",
  },
  {
    year: "Now",
    title: "Open for Freelance Projects",
    body: "Editing videos, reels and thumbnails for creators and brands — one-off projects or a fixed weekly slot on a monthly retainer.",
  },
];

export const process = [
  {
    step: "01",
    title: "Share the brief",
    body: "Send your footage on Google Drive, Dropbox or WeTransfer with references, music and any brand assets.",
  },
  {
    step: "02",
    title: "First cut",
    body: "You get a clear timeline up front. Reels land in 24–48h, long-form YouTube edits in 48–72h.",
  },
  {
    step: "03",
    title: "Revisions",
    body: "Pacing, text, music and colour notes go into revisions — two, three or unlimited depending on your plan.",
  },
  {
    step: "04",
    title: "Final delivery",
    body: "A finished, upload-ready export plus the thumbnail if it's part of your package.",
  },
];

export const software = [
  { name: "DaVinci Resolve", use: "Editing & colour grading", short: "DR" },
  { name: "Premiere Pro", use: "Long-form editing", short: "Pr" },
  { name: "After Effects", use: "Motion graphics & VFX", short: "Ae" },
  { name: "CapCut", use: "Fast short-form cuts", short: "CC" },
  { name: "Photoshop", use: "Thumbnails & graphics", short: "Ps" },
  { name: "Canva", use: "Quick social design", short: "Cv" },
];
