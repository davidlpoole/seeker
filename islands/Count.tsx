import { useSignal } from "@preact/signals";
import { Search } from "../types/Search.ts";
import { Button } from "../components/Button.tsx";

interface CountProps {
  searchTerm: Search;
  removeItem: (id: Search["id"]) => void;
}

export default function Count(props: CountProps) {
  const safeKeywords = encodeURIComponent(props.searchTerm.keywords);
  const safeWhere = encodeURIComponent(props.searchTerm.where);
  const safeDateRange = Number(encodeURIComponent(props.searchTerm.dateRange));
  const safeSalaryRange = encodeURIComponent(props.searchTerm.salaryRange);

  const count = useSignal("");
  const apiUrl = "/api/v2/scrape?";
  const searchParams =
    `keywords=${safeKeywords}&where=${safeWhere}&daterange=${safeDateRange}&salaryrange=${safeSalaryRange}&salarytype=annual`;

  async function getCount() {
    try {
      const response = await fetch(
        apiUrl + searchParams,
      );
      const result = await response.json();
      count.value = result.count;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getCount();

  const url = `https://www.seek.co.nz/jobs?${searchParams}`;

  const options: Record<number, string> = {
    1: "24 hours",
    3: "3 days",
    7: "7 days",
    14: "2 weeks",
    30: "month",
  };

  const [salaryMin, salaryMax] = props.searchTerm.salaryRange.split("-");

  return (
    <div class="flex gap-4 my-2 justify-between items-center">
      <div>
        <a
          href={url}
          target="_blank"
        >
          {props.searchTerm.keywords}
          {" jobs in "}
          {props.searchTerm.where}
          {` ($${Number(salaryMin).toLocaleString()}${
            salaryMax.length === 0
              ? "+"
              : `-$${Number(salaryMax).toLocaleString()}`
          }`}
          {") in the last "}
          {options[props.searchTerm.dateRange]}
          {": "}
          {count.value === ""
            ? <img class="inline" src="/3-dots-bounce.svg" alt="loading..." />
            : (
              <span class="font-semibold">
                {count.value || 0}
              </span>
            )}
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
