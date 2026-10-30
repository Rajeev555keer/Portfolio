import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/data/site";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

const title = "Contact Rajeev Keer — Video Editor & Graphic Designer";
const description =
  "Get in touch with Rajeev Keer by email or WhatsApp to discuss video editing, reels, thumbnails or graphic design work.";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta({ title, description, path: "/contact" }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact immediate />
      <FAQ />
    </div>
  );
}
