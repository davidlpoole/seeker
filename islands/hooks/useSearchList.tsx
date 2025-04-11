import { useEffect, useState } from "preact/hooks";

export function useSearchList(key: string) {
  const [searchList, setSearchList] = useState([] as any[]);
  const LOCAL_STORAGE_KEY = key;

  useEffect(() => {
    const getSeekerList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (getSeekerList) {
      setSearchList(JSON.parse(getSeekerList));
    }
  }, []);

  function addTerm(newSearch) {
    const newList = [...searchList, newSearch];
    setSearchList(newList);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newList),
    );
  }

  function removeFromList(id: string) {
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
