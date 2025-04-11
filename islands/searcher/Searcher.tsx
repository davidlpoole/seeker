import AddToList from "./Form.tsx";
import { Button } from "../../components/Button.tsx";
import Footer from "../../components/Footer.tsx";
import Count from "./Count.tsx";
import { useSearchList } from "../hooks/useSearchList.tsx";

export default function Searcher() {
  const { searchList, addTerm, removeFromList, clearList } = useSearchList(
    "seekerListV4",
  );

  return (
    <div class="">
      <div class="sm:flex sm:flex-row h-screen">
        <div class="
        bg-[#E70279] text-white flex-shrink-0
        z-30 w-full overflow-y-scroll p-5
        sm:h-full sm:overflow-auto sm:w-fit
        ">
          <h1 class="text-4xl font-bold pb-4 sticky top-0">Seeker</h1>
          <AddToList addTerm={addTerm} />
        </div>

        <div class="flex flex-row justify-center w-full text-center">
          <div class="flex flex-col justify-between w-fit p-5">
            <div>
              {searchList.length === 0 && (
                <>
                  <p class="mb-2 font-semibold">
                    Compare jobs on Seek by keywords, location, and date listed.
                  </p>
                  <p class="mb-2">
                    Start by adding a search to your list.
                  </p>
                </>
              )}
              <div class="pb-2">
                {searchList.map((s) => (
                  <Count
                    key={s.id}
                    searchTerm={s}
                    removeItem={removeFromList}
                  />
                ))}
              </div>
              {searchList.length > 1 && (
                <Button onClick={clearList}>Clear list</Button>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
