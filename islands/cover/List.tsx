import { useSignal, useSignalEffect } from "@preact/signals";
import { Button } from "../../components/Button.tsx";

export default function JobDetails(props) {
  const safeJobId = encodeURIComponent(props.searchTerm.jobId);

  const jobDetails = useSignal({
    jobTitle: "",
    advertiserName: "",
    jobDescription: "",
  });
  const apiUrl = `/api/v2/jobdetails`;

  async function getJobDetails() {
    try {
      const response = await fetch(`${apiUrl}?jobId=${safeJobId}`);
      const result = await response.json();
      const jobTitle = result.jobTitle;
      const advertiserName = result.advertiserName;
      const jobDescription = result.jobDescription;
      jobDetails.value = { jobTitle, advertiserName, jobDescription };
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useSignalEffect(() => {
    getJobDetails();
  });

  const url = `https://www.seek.co.nz/job/${safeJobId}`;

  return (
    <div class="flex gap-4 my-2 justify-between items-center">
      <div>
        <a
          href={url}
          target="_blank"
        >
          {jobDetails.value.jobTitle === ""
            ? `Loading job details...`
            : `${jobDetails.value.jobTitle}`}
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
