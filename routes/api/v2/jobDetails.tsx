import { Handlers } from "$fresh/server.ts";
import job from "../../../shared/job.ts";

export const handler: Handlers = {
  async GET(_req) {
    const url = new URL(_req.url);
    const jobId = url.searchParams.get("jobId") || "";

    if (!jobId) {
      return new Response("Job ID is required", { status: 400 });
    }

    const [jobTitle, advertiserName, jobDescription] = await job({ jobId });
    return new Response(
      JSON.stringify({ jobTitle, advertiserName, jobDescription }),
    );
  },
};
