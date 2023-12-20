import { useSignal } from "@preact/signals";
import Search from "../types/Search.ts";
import { Button } from "../components/Button.tsx";

interface CountProps {
  searchTerm: Search;
  removeItem: (id: Search["id"]) => void;
}

export default function Count(props: CountProps) {
  const safeKeywords = encodeURIComponent(props.searchTerm.keywords);
  const safeWhere = encodeURIComponent(props.searchTerm.where);
  const safeDateRange = Number(encodeURIComponent(props.searchTerm.dateRange));

  const count = useSignal("");

  async function getCount(
    keywords: string,
    where: string,
    dateRange: number,
  ) {
    try {
      const url =
        `/api/v2/scrape?keywords=${keywords}&where=${where}&daterange=${dateRange}`;
      const response = await fetch(
        url,
      );
      const result = await response.json();
      count.value = result.count;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getCount(safeKeywords, safeWhere, safeDateRange);

  const url =
    `https://www.seek.co.nz/jobs?keywords=${safeKeywords}&where=${safeWhere}&daterange=${safeDateRange}`;

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
        {props.searchTerm.keywords}
        {" jobs in "}
        {props.searchTerm.where}
        {" in the last "}
        {options[props.searchTerm.dateRange]}
        {": "}
        {count.value === ""
          ? <img class="inline" src="/3-dots-bounce.svg" alt="loading..." />
          : <span class="font-semibold">{count.value || 0}</span>}
      </a>{" "}
      <Button onClick={() => props.removeItem(props.searchTerm.id)}>
        delete
      </Button>
    </div>
  );
}
