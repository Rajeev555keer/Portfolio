import { createFileRoute, redirect } from "@tanstack/react-router";

// Old showcase URL — kept so previously shared links land on the portfolio.
export const Route = createFileRoute("/showcase")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio", statusCode: 301 });
  },
});
