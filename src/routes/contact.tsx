import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

const title = "Contact Rajeev Keer — Video Editor & Graphic Designer";
const description =
  "Get in touch with Rajeev Keer by email or WhatsApp to discuss video editing, reels, thumbnails or graphic design work.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
      <FAQ />
    </div>
  );
}