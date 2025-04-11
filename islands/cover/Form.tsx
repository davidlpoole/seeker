import { h } from "preact";
import { Button } from "../../components/Button.tsx";
import FormTextInput from "../../components/FormTextInput.tsx";

export default function AddToList(
  props: {
    addTerm: (
      searchObject: { id: string; jobId: string; cvText?: string },
    ) => void;
  },
  cvText,
) {
  function handleFileUpload(e: h.JSX.TargetedEvent<HTMLInputElement>) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        props.cvText.value = text; // Store the extracted text locally
        console.log("Extracted text:", text);
      };
      reader.readAsText(file); // Reads the file as plain text
    }
  }

  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const jobId = (e.target as HTMLFormElement)?.jobId.value;
    const searchObject = { id, jobId, cvText };
    props.addTerm(searchObject);
  }

  return (
    <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
      <FormTextInput
        name="jobId"
        label="Job ID"
        required={true}
      />

      <div class="mt-3">
        <label for="cvFile" class="block text-sm font-medium">
          Upload Your CV
        </label>
        <input
          type="file"
          id="cvFile"
          name="cvFile"
          accept=".txt" // accept=".txt,.pdf,.docx"
          onChange={(e) => handleFileUpload(e)}
          class="mt-1 block w-full"
          required={true}
        />
      </div>

      <div class="mt-3 grid">
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
