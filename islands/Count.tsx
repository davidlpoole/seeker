import { useSignal } from "@preact/signals";

interface CountProps {
  searchTerm: string;
}

export default function Count(props: CountProps) {
  const count = useSignal("Loading...");

  async function getCount(search: string) {
    try {
      const response = await fetch(
        `/api/v1/scrape/${search}`,
      );
      const result = await response.json();
      count.value = result.count;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getCount(props.searchTerm);

  return (
    <div class="my-2">
      <div>
        {props.searchTerm}: {count}
      </div>
    </div>
  );
}
