import { h } from "preact";
import { Button } from "../components/Button.tsx";
import { Search } from "../types/Search.ts";
import FormTextInput from "../components/FormTextInput.tsx";
import FormSelectInput from "../components/FormSelectInput.tsx";

interface Props {
  addTerm: (newSearch: Search) => void;
}

export default function AddToList(props: Props) {
  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const keywords = (e.target as HTMLFormElement)?.keywords.value;
    const where = (e.target as HTMLFormElement)?.where?.value || "New Zealand";
    const dateRange = (e.target as HTMLFormElement)?.dateRange.value;
    const salaryMin = (e.target as HTMLFormElement)?.salaryMin?.value || "0";
    const salaryMax = (e.target as HTMLFormElement)?.salaryMax?.value || "";
    const salaryRange = `${salaryMin}-${salaryMax}`;

    const searchObject = { id, keywords, where, dateRange, salaryRange };
    props.addTerm(searchObject);
  }

  return (
    <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
      <FormTextInput
        name="keywords"
        placeholder="Software Developer"
        label="Keywords"
        required={true}
      />
      <FormTextInput
        name="where"
        placeholder="All New Zealand"
        label="Location"
      />

      <FormSelectInput
        name="dateRange"
        label="Date listed"
        options={[
          { value: 1, label: "24 hours" },
          { value: 3, label: "3 days" },
          { value: 7, label: "7 days" },
          { value: 14, label: "2 weeks" },
          { value: 30, label: "month" },
        ]}
      />

      <FormTextInput
        type="number"
        name="salaryMin"
        placeholder="any"
        label="Salary from"
      />
      <FormTextInput
        type="number"
        name="salaryMax"
        placeholder="any"
        label="Salary to"
      />

      <div class="mt-3 grid">
        <Button>Search</Button>
      </div>
    </form>
  );
}
