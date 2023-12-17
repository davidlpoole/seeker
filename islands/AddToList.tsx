import { Button } from "../components/Button.tsx";

interface Props {
  addTerm: (newVal: string) => void;
}

export default function AddToList(props: Props) {
  function handleAdd(e) {
    e.preventDefault();
    const newTerm = e.target.newTerm.value;
    props.addTerm(newTerm);
    e.target.newTerm.value = "";
  }

  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        className="px-2 py-1 mr-2 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
        type="text"
        name="newTerm"
        required
        placeholder={"Software Developer"}
      />
      <Button>Search</Button>
    </form>
  );
}
