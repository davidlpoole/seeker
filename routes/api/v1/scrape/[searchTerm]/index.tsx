import { Handlers, PageProps } from "$fresh/server.ts";
import scrape from "../../../../../shared/scrape.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const searchTerm = ctx.params.searchTerm;
    const count = await scrape(searchTerm);
    return new Response(JSON.stringify({ searchTerm, count }));
  },
};
