import { createContext, useState } from "react";

export const SearchContext = createContext({
  querry: "",
  setQuerry: () => {},
});

export default function SearchContextProvider({ children }) {
  const [querry, setQuerry] = useState("");

  const searchCtx = {
    querry,
    setQuerry,
  };

  return (
    <SearchContext.Provider value={searchCtx}>
      {children}
    </SearchContext.Provider>
  );
}
