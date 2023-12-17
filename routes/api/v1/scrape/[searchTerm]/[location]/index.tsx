import { Handlers } from "$fresh/server.ts";
import scrape from "../../../../../../shared/scrape.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const searchTerm = ctx.params.searchTerm;
    const location = ctx.params.location;
    const count = await scrape(searchTerm, location);
    return new Response(JSON.stringify({ searchTerm, location, count }));
  },
};
