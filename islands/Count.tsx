import { useSignal } from "@preact/signals";
import Search from "../types/Search.ts";

interface CountProps {
  searchTerm: Search;
}

export default function Count(props: CountProps) {
  const safeSearchTerm = encodeURIComponent(props.searchTerm.searchTerm);
  const safeLocation = encodeURIComponent(props.searchTerm.location);
  const dateRange = Number(props.searchTerm.dateRange) || 7;
  const count = useSignal("");

  async function getCount(
    searchTerm: string,
    location = "All-New-Zealand",
    dateRange = 7,
  ) {
    try {
      const url =
        `/api/v1/scrape/${searchTerm}/${location}?dateRange=${dateRange}`;
      const response = await fetch(
        url,
      );
      const result = await response.json();
      count.value = result.count;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getCount(safeSearchTerm, safeLocation, dateRange);

  let url = `https://www.seek.co.nz/${safeSearchTerm}-jobs`;
  safeLocation ? url += `/in-${safeLocation}` : null;
  dateRange ? url += `?dateRange=${dateRange}` : null;

  const options: Record<number, string> = {
    1: "24 hours",
    3: "3 days",
    7: "7 days",
    14: "2 weeks",
    30: "month",
  };

  return (
    <div class="my-2">
      <a
        href={url}
        target="_blank"
      >
        {props.searchTerm.searchTerm} jobs
        {props.searchTerm.location
          ? ` in ${props.searchTerm.location} `
          : ` in NZ `}
        {`posted in the last ${options[props.searchTerm.dateRange]}: `}
        {count.value === ""
          ? <img class="inline" src="/3-dots-bounce.svg" alt="loading..." />
          : count.value || 0}
      </a>
    </div>
  );
}
