import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import Search from "../types/Search.ts";

export default async function scrape(
  { keywords, where, dateRange }: Search,
) {
  const url =
    `https://www.seek.co.nz/jobs?daterange=${dateRange}&keywords=${keywords}&where=${where}`;

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
