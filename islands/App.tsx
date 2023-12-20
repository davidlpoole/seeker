import { useEffect, useState } from "preact/hooks";

import AddToList from "../islands/AddToList.tsx";
import CountList from "../islands/CountList.tsx";
import Search from "../types/Search.ts";
import { Button } from "../components/Button.tsx";

export default function App() {
  const [searchList, setSearchList] = useState([] as Search[]);

  useEffect(() => {
    const getSeekerList = localStorage.getItem("seekerListV2");
    if (getSeekerList) {
      setSearchList(JSON.parse(getSeekerList));
    }

    // Clean up any old versions
    localStorage.removeItem("seekerList");
  }, []);

  function addTerm(newSearch: Search) {
    const newList = [...searchList, newSearch];

    setSearchList(newList);
    localStorage.setItem(
      "seekerListV2",
      JSON.stringify(newList),
    );
  }

  function clearList() {
    setSearchList([]);
    localStorage.removeItem("seekerListV2");
  }

  return (
    <div class="">
      <div class="sm:flex sm:flex-row sm:h-screen">
        <aside class="
        bg-[#E70279] text-white
        z-30 sticky top-0 w-full overflow-y-scroll p-5
        sm:h-full sm:overflow-auto sm:w-fit
        ">
          <h1 class="text-4xl font-bold pb-4">The Seeker</h1>
          <AddToList addTerm={addTerm} />
        </aside>

        <div class="m-5">
          {searchList.length === 0 && (
            <>
              <p class="mb-2 font-semibold">
                Compare jobs on Seek by keywords, location, or date listed.
              </p>
              <p class="mb-2">
                Start by adding a search to your list.
              </p>
            </>
          )}
          <CountList searchList={searchList} />
          {searchList.length > 0 && (
            <Button onClick={clearList}>Clear list</Button>
          )}
        </div>
      </div>
    </div>
  );
}
