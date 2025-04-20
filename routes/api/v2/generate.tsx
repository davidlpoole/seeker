import { Handlers } from "$fresh/server.ts";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: Deno.env.get("GROQ_API_KEY") });

async function generateCoverLetter(
  jobDescription: string,
  cvText: string,
): Promise<string> {
  if (!groq.apiKey) {
    throw new Error("Missing Groq API key in environment variables");
  }

  const prompt = `
          Instructions:
          Write a professional cover letter based on the following job description and CV,
          only provide the body of the letter (no salutation or closing) without any additional text.

          Job Description:
          ${jobDescription}

          CV:
          ${cvText}

          Cover Letter:
        `;

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });

  // Extract and return the generated cover letter
  return chatCompletion.choices[0]?.message?.content?.trim() ||
    "Failed to generate cover letter.";
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
        JSON.stringify({ error }),
        { status: 500 },
      );
    }
  },
};
