import React, { useState } from "react";
export interface Filter {
  search: string;
  setSearch: (sort: string) => void;
}

const FilterContext = React.createContext<Filter>(
  {} as Filter,
);

export const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "useFilter must be used within a FilterProvider",
    );
  }
  return context;
};

export const FilterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {

  const [searchState, setSearchState] = useState<string>('');

  const setSearch = (search: string) => {
    setSearchState(search);
  };


  return (
    <FilterContext.Provider
      value={{
        search: searchState,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
