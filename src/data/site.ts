export const site = {
  name: "Rajeev Keer",
  role: "Video Editor & Graphic Designer",
  tagline: "Creating Cinematic Videos, Viral Reels, YouTube Content & Professional Graphics.",
  url: "https://editor-rajeev-keer.vercel.app",
  email: "rajeeevkeer2004@gmail.com",
  phone: "+91 8964909101",
  whatsapp: "https://wa.me/918964909101",
  instagram: "https://instagram.com/heyrajeev_07",
  instagramHandle: "@heyrajeev_07",
  youtube: "https://youtube.com/@mpwalegamer",
  youtubeHandle: "@mpwalegamer",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

/** Shared head tags so every page gets a proper social preview card. */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${site.url}${path}`;
  const image = `${site.url}/og-image.jpg`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
