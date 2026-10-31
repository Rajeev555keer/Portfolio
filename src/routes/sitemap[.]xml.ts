import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const pages = ["/", "/portfolio", "/about", "/pricing", "/contact", "/start"];

// Generated from the project data, so new portfolio pieces are listed automatically.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [...pages, ...projects.map((p) => `/work/${p.id}`)]
          .map((path) => `  <url><loc>${site.url}${path}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
