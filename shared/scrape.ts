import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import { SearchData } from "../types/Search.ts";

export default async function scrape(
  { keywords, where, dateRange, salaryRange }: SearchData,
) {
  const safeKeywords = encodeURIComponent(keywords);
  const safeWhere = encodeURIComponent(where);
  const url =
    `https://www.seek.co.nz/jobs?daterange=${dateRange}&keywords=${safeKeywords}&where=${safeWhere}&salaryrange=${salaryRange}&salarytype=annual`;
  console.log(url);
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
