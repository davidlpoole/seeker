import Search from "../types/Search.ts";
import Count from "./Count.tsx";

interface Props {
  searchList: Search[];
}

export default function CountList(props: Props) {
  return (
    <div class="pb-2">
      {props.searchList.map((s) => <Count searchTerm={s} />)}
    </div>
  );
}
