import React, { useState, 
  createContext } from 'react';

const initData = {
  number: false,
  sortDirection: 'asc',
  search: ''
};

const FilterContext = createContext([initData, () => {}, () => {}]);

const FilterProvider = ({ children }) => {
  const [value, setValue] = useState(initData);

  const setNumber = number => setValue({...value, number});
  const setSortDirection = sortDirection => setValue({...value, sortDirection});
  const setSearchValue = search => setValue({...value, search});

  return (
    <FilterContext.Provider value={[value, setNumber, setSortDirection, setSearchValue]}>
      { children }
    </FilterContext.Provider>);
};
  
export { FilterContext, FilterProvider };
