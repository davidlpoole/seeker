import { useEffect, useState } from "preact/hooks";

import { Search } from "../../types/Search.ts";

export function useSearchList(key: string) {
  const [searchList, setSearchList] = useState([] as Search[]);
  const LOCAL_STORAGE_KEY = key;

  useEffect(() => {
    const getSeekerList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (getSeekerList) {
      setSearchList(JSON.parse(getSeekerList));
    }
  }, []);

  function addTerm(newSearch: Search) {
    const newList = [...searchList, newSearch];
    setSearchList(newList);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newList),
    );
  }

  function removeFromList(id: Search["id"]) {
    const newList = searchList.filter((search) => search.id !== id);
    setSearchList(newList);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newList),
    );
  }

  function clearList() {
    setSearchList([]);
    localStorage.clear();
  }

  return { searchList, addTerm, removeFromList, clearList };
}
