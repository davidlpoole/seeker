import { Handlers, PageProps } from "$fresh/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const searchTerm = ctx.params.searchTerm;
    const count = await scrape(searchTerm);
    return new Response(JSON.stringify({ searchTerm, count }));
  },
};

async function scrape(text: string) {
  const url = `https://www.seek.co.nz/${text}-jobs`;

  const response = await fetch(url);
  const html = await response.text();

  const document = new DOMParser().parseFromString(html, "text/html");

  const totalJobsCountElement = document?.querySelector(
    '[data-automation="totalJobsCount"]',
  );
  const totalJobsCount = totalJobsCountElement
    ? totalJobsCountElement.textContent
    : null;

  return totalJobsCount;
}
