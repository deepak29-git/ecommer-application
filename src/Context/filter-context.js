import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";
import { useAxios } from "../Api-data/useAxios";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { data } = useAxios();

  console.log(data);
  const [state, dispatch] = useReducer(reducer, {
    sorting: null,
    products: [],
    loading: false,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
