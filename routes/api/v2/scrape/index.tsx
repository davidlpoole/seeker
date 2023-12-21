import { Handlers } from "$fresh/server.ts";
import scrape from "../../../../shared/scrape.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const url = new URL(_req.url);
    const keywords = url.searchParams.get("keywords") ||
      "Software Developer";
    const where = url.searchParams.get("where") ||
      "All New Zealand";
    const dateRange = Number(url.searchParams.get("daterange")) || 1;
    const salaryRange = url.searchParams.get("salaryrange") || "0-";

    const count = await scrape({ keywords, where, dateRange, salaryRange });
    return new Response(JSON.stringify({ count }));
  },
};
