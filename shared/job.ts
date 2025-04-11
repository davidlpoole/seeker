import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";

export default async function job(
  { jobId }: { jobId: string },
) {
  const safeJobId = encodeURIComponent(jobId);
  const url = `https://www.seek.co.nz/job/${safeJobId}`;

  console.log(
    `${new Date().toISOString()} - Fetching ${url}`,
  );

  const response = await fetch(url);
  const html = await response.text();
  const document = new DOMParser().parseFromString(html, "text/html");

  const jobTitle = document?.querySelector(
    '[data-automation="job-detail-title"]',
  )?.textContent;
  const advertiserName = document?.querySelector(
    '[data-automation="advertiser-name"]',
  )?.textContent;
  const jobDescriptionElement = document?.querySelector(
    '[data-automation="jobAdDetails"]',
  )?.innerHTML;

  let jobDescription = "";
  if (jobDescriptionElement) {
    jobDescription = jobDescriptionElement
      .replace(/<[^>]*>/g, " ") // Strips HTML tags
      .replace(/&nbsp;/g, " "); // Replaces non-breaking spaces with regular spaces
  }

  return [jobTitle, advertiserName, jobDescription];
}
