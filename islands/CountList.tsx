import Count from "./Count.tsx";

export default function CountList(props) {
  return (
    <div class="text-white text-center">
      {props.searchTerms.map((s) => <Count searchTerm={s} />)}
    </div>
  );
}
