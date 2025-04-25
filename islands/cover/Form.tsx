import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Button } from "../../components/Button.tsx";
import FormTextInput from "../../components/FormTextInput.tsx";
import { useSearchList } from "../hooks/useSearchList.tsx";
import JobDetails from "./List.tsx";

export default function AddToList(props: {
  cvText: { value: string }; // Include cvText in props
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [tempCVText, setTempCVText] = useState(""); // Temporary CV text for the modal
  const { searchList, addTerm, removeFromList, clearList } = useSearchList(
    "seekerCoverV1",
  );

  function handleOpenModal() {
    setIsModalOpen(true); // Open the modal
  }

  function handleSaveCV() {
    props.cvText.value = tempCVText; // Save the pasted CV to the signal
    setIsModalOpen(false); // Close the modal
  }

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsModalOpen(false); // Close the modal when Escape is pressed
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      self.addEventListener("keydown", handleEscapeKey);
    } else {
      self.removeEventListener("keydown", handleEscapeKey);
    }

    // Cleanup the event listener when the component unmounts or modal closes
    return () => {
      self.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  function handleAdd(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const jobId = (e.target as HTMLFormElement)?.jobId.value;
    const searchObject = { id, jobId, cvText: props.cvText.value }; // Pass the signal's value
    if (!jobId) {
      alert("Please enter a job ID");
      return;
    }
    if (!props.cvText.value) {
      alert("Please enter your CV");
      return;
    }
    addTerm(searchObject);
  }

  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)} class="grid gap-2">
        <FormTextInput
          name="jobId"
          label="Job ID"
        />

        {searchList?.length > 0 && (
          <div class="pb-2">
            {searchList.map((s) => {
              return (
                <JobDetails
                  key={s.id}
                  searchTerm={s}
                  removeItem={removeFromList}
                />
              );
            })}
          </div>
        )}

        <div>Your CV</div>
        <Button type="button" onClick={handleOpenModal}>
          Edit your CV...
        </Button>

        {props.cvText.value && (
          <div class="text-sm">
            {props.cvText.value.length > 50
              ? `${props.cvText.value.slice(0, 50)}...`
              : props.cvText.value}
          </div>
        )}

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
