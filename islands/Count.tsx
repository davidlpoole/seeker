import { useSignal } from "@preact/signals";

interface CountProps {
  searchTerm: string;
}

// Create a cache object to store the search results
const cache: { [searchTerm: string]: number } = {};

export default function Count(props: CountProps) {
  const count = useSignal("");

  async function getCount(search: string) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/scrape/${search}`,
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
        {props.searchTerm}: {count.value === ""
          ? <img class=" inline" src="/3-dots-bounce.svg" alt="loading..." />
          : count.value || 0}
      </div>
    </div>
  );
}
