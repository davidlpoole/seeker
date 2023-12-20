import { h } from "preact";
import { Button } from "../components/Button.tsx";
import Search from "../types/Search.ts";

interface Props {
  addTerm: (newSearch: Search) => void;
}

export default function AddToList(props: Props) {
  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const keywords = (e.target as HTMLFormElement)?.keywords.value;
    const where = (e.target as HTMLFormElement)?.where.value || "New Zealand";
    const dateRange = (e.target as HTMLFormElement)?.dateRange.value;
    const id = crypto.randomUUID();
    const searchObject = { id, keywords, where, dateRange };
    props.addTerm(searchObject);
  }

  return (
    <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
      <div class="grid">
        <label>
          Keywords
        </label>
        <input
          className="px-2 py-1 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
          type="text"
          name="keywords"
          required
          placeholder={"Software Developer"}
        />
      </div>
      <div class="grid">
        <label>
          Location
        </label>
        <input
          className="px-2 py-1 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
          type="text"
          name="where"
          placeholder={"All New Zealand"}
        />
      </div>
      <div class="grid">
        <label>
          Date listed
        </label>
        <select
          name="dateRange"
          class="px-2 py-1.5 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
        >
          <option value="1" selected>In the last 24 hours</option>
          <option value="3">In the last 3 days</option>
          <option value="7">In the last 7 days</option>
          <option value="14">In the last 2 weeks</option>
          <option value="30">In the last month</option>
        </select>
      </div>
      <div class="mt-3 grid">
        <Button>Search</Button>
      </div>
    </form>
  );
}
