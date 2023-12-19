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
    <>
      <h1 class="text-4xl font-bold pb-4 text-white">The Seeker</h1>
      <p class="text-white mb-2">
        Compare jobs on Seek by search term, location, or date range.
      </p>
      <AddToList addTerm={addTerm} />
      <CountList searchList={searchList} />
      {searchList.length > 0 && <Button onClick={clearList}>Clear list</Button>}
    </>
  );
}
