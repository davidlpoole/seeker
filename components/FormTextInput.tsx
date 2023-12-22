interface Props {
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
  required?: boolean;
}

export default function FormTextInput(props: Props) {
  return (
    <div class="flex gap-2 justify-between items-center sm:grid">
      <label>
        {props.label || props.name}
      </label>
      <input
        className="px-2 py-1 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
        type={props.type || "text"}
        name={props.name}
        placeholder={props.placeholder || props.name}
        required={props.required}
      />
    </div>
  );
}
