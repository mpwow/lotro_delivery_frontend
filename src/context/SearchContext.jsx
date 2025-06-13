import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openSearchHandler = () => {
    setSearchOpen(true);
  };

  const closeSearchHandler = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const value = {
    openSearchHandler,
    closeSearchHandler,
    searchOpen,
    searchQuery,
    setSearchQuery,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
