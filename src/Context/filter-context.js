import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    search:null,
    sorting: null,
    priceRange: 5000,
    category: null,
    ratings: null,
    brand: {
      roadster: false,
      nautica: false,
      puma: false,
      adidas: false,
      hAndm: false,
      colorbar: false,
      klotthe: false,
      talesAndStories: false,
      dove: false,
    },
    includeOutOfStock: false,
    fastDelivery: false,
    clearAll: false,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
