import { useState } from "preact/hooks";

import AddToList from "../islands/AddToList.tsx";
import CountList from "../islands/CountList.tsx";

export default function App() {
  const [searchTerms, setSearchTerms] = useState([] as string[]);

  function addTerm(newVal: string) {
    setSearchTerms([...searchTerms, newVal]);
  }

  return (
    <>
      <h1 class="text-4xl font-bold pb-4">The Seeker</h1>
      <p>
        Find out how many jobs are available on Seek NZ for a specific term.
      </p>
      <AddToList addTerm={addTerm} />
      <CountList searchTerms={searchTerms} />
    </>
  );
}
