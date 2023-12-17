import { useSignal } from "@preact/signals";
import Search from "../types/Search.ts";

interface CountProps {
  searchTerm: Search;
}

export default function Count(props: CountProps) {
  const count = useSignal("");

  async function getCount(searchTerm: string, location: string) {
    try {
      const response = await fetch(
        `/api/v1/scrape/${searchTerm}/${location}`,
      );
      const result = await response.json();
      count.value = result.count;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const safeSearchTerm = encodeURIComponent(props.searchTerm.searchTerm);
  const safeLocation = encodeURIComponent(props.searchTerm.location);

  getCount(safeSearchTerm, safeLocation);

  let url = `https://www.seek.co.nz/${safeSearchTerm}-jobs/`;
  safeLocation ? url += `in-${safeLocation}` : null;

  return (
    <div class="my-2">
      <a
        href={url}
        target="_blank"
      >
        {props.searchTerm.searchTerm} jobs
        {props.searchTerm.location
          ? ` in ${props.searchTerm.location}: `
          : ` in NZ: `}
        {count.value === ""
          ? <img class="inline" src="/3-dots-bounce.svg" alt="loading..." />
          : count.value || 0}
      </a>
    </div>
  );
}
