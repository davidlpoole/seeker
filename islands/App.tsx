import { useEffect, useState } from "preact/hooks";

import AddToList from "../islands/AddToList.tsx";
import CountList from "../islands/CountList.tsx";
import Search from "../types/Search.ts";
import { Button } from "../components/Button.tsx";

export default function App() {
  const [searchList, setSearchList] = useState([] as Search[]);

  useEffect(() => {
    const getSeekerList = localStorage.getItem("seekerList");
    if (getSeekerList) {
      setSearchList(JSON.parse(getSeekerList));
    }
  }, []);

  function addTerm(newSearch: Search) {
    const newList = [...searchList, newSearch];

    setSearchList(newList);
    localStorage.setItem(
      "seekerList",
      JSON.stringify(newList),
    );
  }

  function clearList() {
    setSearchList([]);
    localStorage.removeItem("seekerList");
  }

  return (
    <>
      <h1 class="text-4xl font-bold pb-4 text-white">The Seeker</h1>
      <p class="text-white mb-2">
        Find out how many jobs are available on Seek for a specific search term
        and location (optional).
      </p>
      <AddToList addTerm={addTerm} />
      <CountList searchList={searchList} />
      {searchList.length > 0 && <Button onClick={clearList}>Clear list</Button>}
    </>
  );
}
