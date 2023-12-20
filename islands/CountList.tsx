import Search from "../types/Search.ts";
import Count from "./Count.tsx";

interface Props {
  searchList: Search[];
  removeItem: (id: Search["id"]) => void;
}

export default function CountList(props: Props) {
  return (
    <div class="pb-2">
      {props.searchList.map((s) => (
        <Count searchTerm={s} removeItem={props.removeItem} />
      ))}
    </div>
  );
}
