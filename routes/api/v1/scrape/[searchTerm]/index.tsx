import { Handlers, PageProps } from "$fresh/server.ts";
import scrape from "../../../../../shared/scrape.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const url = new URL(_req.url);
    const dateRange = Number(url.searchParams.get("dateRange")) || 7;
    const searchTerm = ctx.params.searchTerm;
    const count = await scrape(searchTerm, "All New Zealand", dateRange);
    return new Response(JSON.stringify({ searchTerm, count }));
  },
};
