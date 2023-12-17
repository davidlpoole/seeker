import { Button } from "../components/Button.tsx";
import Search from "../types/Search.ts";

interface Props {
  addTerm: (newSearch: Search) => void;
}

export default function AddToList(props: Props) {
  function handleAdd(e) {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    const location = e.target.location.value;
    const searchObject = { searchTerm, location };
    props.addTerm(searchObject);
  }

  return (
    <form onSubmit={(e) => handleAdd(e)} class="flex flex-wrap gap-2">
      <input
        className="px-2 py-1 mr-2 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
        type="text"
        name="searchTerm"
        required
        placeholder={"Software Developer"}
      />
      <input
        className="px-2 py-1 mr-2 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
        type="text"
        name="location"
        placeholder={"All New Zealand"}
      />
      <Button>Search</Button>
    </form>
  );
}
