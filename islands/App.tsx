import { useState } from "preact/hooks";

import AddToList from "../islands/AddToList.tsx";
import CountList from "../islands/CountList.tsx";
import Search from "../types/Search.ts";

export default function App() {
  const [searchList, setSearchList] = useState([] as Search[]);

  function addTerm(newSearch: Search) {
    setSearchList([...searchList, newSearch]);
  }

  return (
    <>
      <h1 class="text-4xl font-bold pb-4 text-white">The Seeker</h1>
      <p class="text-white mb-2">
        Find out how many jobs are available on Seek NZ for a specific search
        term and location (optional).
      </p>
      <AddToList addTerm={addTerm} />
      <CountList searchList={searchList} />
    </>
  );
}
