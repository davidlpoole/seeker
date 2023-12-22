import { options } from "preact";

interface Option {
  value: number;
  label: string;
}

interface FormSelectInputProps {
  name: string;
  label: string;
  options: Option[];
}

export default function FormSelectInput(props: FormSelectInputProps) {
  return (
    <div class="flex gap-2 justify-between items-center sm:grid">
      <label>
        {props.label}
      </label>
      <select
        name={props.name}
        class="px-2 py-1.5 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
      >
        {props.options.map(({ value, label }) => (
          <option value={value}>In the last {label}</option>
        ))}
      </select>
    </div>
  );
}
