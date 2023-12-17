interface ListProps {
  list: number[];
  name: string;
}

export default function List(props: ListProps) {
  return (
    <div class="my-2">
      {props.name}: {props.list.length > 0 ? props.list.join(", ") : "..."}
    </div>
  );
}
