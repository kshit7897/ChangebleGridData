import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  return (
    <MainContext.Provider
      value={{
        token,
        setToken,
        data,
        setData,
        search,
        setSearch,
        filteredData,
        setFilteredData,
        searchQuery,
        setSearchQuery,
        isLoad,
        setIsLoad,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };
