import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    sorting: null,
    priceRange: 5000,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
