interface Props {
  name: string;
  placeholder: string;
}

export default function FormInput(props: Props) {
  return (
    <input
      id={props.name}
      name={props.name}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors w-40"
      type="text"
      placeholder={props.placeholder}
      required
    />
  );
}
