import Form from "./Form.tsx";
// import { Button } from "../../components/Button.tsx";
import Footer from "../../components/Footer.tsx";
import { useSignal } from "@preact/signals";

export default function Cover() {
  const cvText = useSignal<string>("");

  return (
    <div class="">
      <div class="sm:flex sm:flex-row h-screen">
        <div class="
        bg-[#E70279] text-white flex-shrink-0
        z-30 w-full overflow-y-scroll p-5
        sm:h-full sm:overflow-auto sm:w-fit
        ">
          <h1 class="text-4xl font-bold pb-4 sticky top-0">Seeker</h1>
          <Form cvText={cvText} />
        </div>

        <div class="flex flex-row justify-center w-full text-center">
          <div class="flex flex-col justify-between w-fit p-5">
            <div>
              <div>
                <p class="mb-2 font-semibold">
                  Generate a cover letter based on a job description and your
                  CV.
                </p>
                <p class="mb-2">
                  Start by adding a job and your cv.
                </p>
                {/* <p>{cvText.value}</p> */}
              </div>
              {
                /* <div class="pb-2">
                {searchList?.length > 0 && searchList.map((s) => {
                  return (
                    <JobDetails
                      key={s.id}
                      searchTerm={s}
                      removeItem={removeFromList}
                    />
                  );
                })}
              </div> */
              }
              {
                /* {searchList.length > 1 && (
                <Button onClick={clearList}>Clear list</Button>
              )} */
              }
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
