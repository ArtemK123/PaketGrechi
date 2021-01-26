import React, { useState, 
  createContext } from 'react';

const initData = {
  number: false,
  sortDirection: 'asc'
};

const FilterContext = createContext([initData, () => {}, () => {}]);

const FilterProvider = ({ children }) => {
  const [value, setValue] = useState(initData);

  const setNumber = number => setValue({...value, number});
  const setSortDirection = sortDirection => setValue({...value, sortDirection});

  return (
    <FilterContext.Provider value={[value, setNumber, setSortDirection]}>
      { children }
    </FilterContext.Provider>);
};
  
export { FilterContext, FilterProvider };
