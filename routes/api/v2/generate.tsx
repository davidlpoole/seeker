import { Handlers } from "$fresh/server.ts";

function generateCoverLetter(jobDescription: string, cvText: string): string {
  // Placeholder function to simulate cover letter generation
  return `Dear Hiring Manager,
Based on the job description: "${jobDescription}" and my CV: "${cvText}", I believe I am a strong candidate for this position.
Sincerely,
[Your Name]`;
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

      const coverLetter = generateCoverLetter(jobDescription, cvText);

      return new Response(
        JSON.stringify({ result: coverLetter }),
        { headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Invalid request payload" }),
        { status: 400 },
      );
    }
  },
};
