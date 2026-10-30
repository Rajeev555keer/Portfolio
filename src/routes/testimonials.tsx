import { createFileRoute, redirect } from "@tanstack/react-router";

// Testimonials page was retired — send old links to the portfolio instead.
export const Route = createFileRoute("/testimonials")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio", statusCode: 301 });
  },
});
