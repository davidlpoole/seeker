import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";

export default async function scrape(
  text: string,
  location = "All-New-Zealand",
) {
  const url = `https://www.seek.co.nz/${text}-jobs/in-${location}`;

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
