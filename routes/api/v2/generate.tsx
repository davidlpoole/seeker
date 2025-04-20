import { Handlers } from "$fresh/server.ts";

import "jsr:@std/dotenv/load";

console.log(Deno.env.get("GREETING")); // "Hello, world."

async function generateCoverLetter(
  jobDescription: string,
  cvText: string,
): Promise<string> {
  const apiKey = Deno.env.get("GROQ_API_KEY");

  if (!apiKey) {
    throw new Error("Missing Groq API key in environment variables");
  }

  const response = await fetch("https://api.groq.com/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt:
        `Write a professional cover letter based on the following job description and CV:\n\nJob Description:\n${jobDescription}\n\nCV:\n${cvText}\n\nCover Letter:`,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result?.text.trim() || "Failed to generate cover letter.";
}

export const handler: Handlers = {
  async POST(req) {
    try {
      const { jobDescription, cvText } = await req.json();

      if (!jobDescription || !cvText) {
        return new Response(
          JSON.stringify({ error: "Missing job description or CV text" }),
          { status: 400 },
        );
      }

      const coverLetter = await generateCoverLetter(jobDescription, cvText);

      return new Response(
        JSON.stringify({ result: coverLetter }),
        { headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 },
      );
    }
  },
};
