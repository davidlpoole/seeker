import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function JobDetails(props) {
  const safeJobId = encodeURIComponent(props.searchTerm.jobId);

  const jobDetails = useSignal("");
  const apiUrl = `/api/v2/jobdetails`;

  async function getJobDetails() {
    try {
      const response = await fetch(`${apiUrl}?jobId=${safeJobId}`);
      const result = await response.json();
      jobDetails.value = result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getJobDetails();

  const url = `https://www.seek.co.nz/job/${safeJobId}`;

  console.log("jobDetails", jobDetails.value);

  return (
    <div class="flex gap-4 my-2 justify-between items-center">
      <div>
        <a
          href={url}
          target="_blank"
        >
          {safeJobId}
          {JSON.stringify(jobDetails.value)}
        </a>
      </div>
      <div class="flex gap-2">
        <Button onClick={() => props.removeItem(props.searchTerm.id)}>
          delete
        </Button>
      </div>
    </div>
  );
}
