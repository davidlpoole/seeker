import { h } from "preact";
import { useState } from "preact/hooks";
import { Button } from "../../components/Button.tsx";
import FormTextInput from "../../components/FormTextInput.tsx";

export default function AddToList(props: {
  addTerm: (
    searchObject: { id: string; jobId: string; cvText?: string },
  ) => void;
  cvText: { value: string }; // Include cvText in props
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [tempCVText, setTempCVText] = useState(""); // Temporary CV text for the modal

  function handleOpenModal() {
    setIsModalOpen(true); // Open the modal
  }

  function handleSaveCV() {
    props.cvText.value = tempCVText; // Save the pasted CV to the signal
    setIsModalOpen(false); // Close the modal
  }

  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const jobId = (e.target as HTMLFormElement)?.jobId.value;
    const searchObject = { id, jobId, cvText: props.cvText.value }; // Pass the signal's value
    props.addTerm(searchObject);
  }

  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
        <FormTextInput
          name="jobId"
          label="Job ID"
        />

        <div>Your CV</div>
        <Button type="button" onClick={handleOpenModal}>
          Your CV...
        </Button>

        <div class="mt-3 grid">
          <Button type="submit">Generate</Button>
        </div>
      </form>

      {isModalOpen && (
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-black">
          <div class="bg-white p-5 rounded shadow-lg w-2/3 h-2/3 flex flex-col">
            <div class="flex justify-between items-center mb-3">
              <h2 class="text-lg font-bold">Your CV</h2>
              <div class="flex gap-2">
                <Button type="button" onClick={handleSaveCV}>
                  Save
                </Button>
                <Button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
            <textarea
              class="flex-grow border border-gray-300 rounded p-2 resize-none"
              value={tempCVText}
              onInput={(e) =>
                setTempCVText((e.target as HTMLTextAreaElement).value)}
              placeholder="Write or paste your CV here..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
