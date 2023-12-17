import Count from "./Count.tsx";

export default function CountList(props) {
  return <div>{props.searchTerms.map((s) => <Count searchTerm={s} />)}</div>;
}
