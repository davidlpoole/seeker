import { h } from "preact";
import { Button } from "../../components/Button.tsx";
import FormTextInput from "../../components/FormTextInput.tsx";

export default function AddToList(props: {
  addTerm: (searchObject: { id: string; jobId: string }) => void;
}) {
  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const jobId = (e.target as HTMLFormElement)?.jobId.value;
    const searchObject = { id, jobId };
    props.addTerm(searchObject);
  }

  return (
    <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
      <FormTextInput
        name="jobId"
        label="Job ID"
        required={true}
      />

      <div class="mt-3 grid">
        <Button>Search</Button>
      </div>
    </form>
  );
}
