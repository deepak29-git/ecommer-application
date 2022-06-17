export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.value };
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.value };
    case "MEN":
      return {
        ...state,
        category: { ...state.category, men: !state.category.men }
      };
    case "WOMEN":
      return {
        ...state,
        category: { ...state.category, women: !state.category.women }
      };
    case "KIDS":
      return {
        ...state,
        category: { ...state.category, kids: !state.category.kids }
      };
    case "HOME & LIVING":
      return {
        ...state,
        category: {
          ...state.category,
          homeAndliving: !state.category.homeAndliving
        }
      };
    case "BEAUTY":
      return {
        ...state,
        category: { ...state.category, beauty: !state.category.beauty },
      };

      case "categories":
        return {...state,categories:action.payload}
      case "one & above":
        return { ...state, ratings: action.rating };
      case "two & above":
        return { ...state, ratings: action.rating };
    case "three & above":
      return { ...state, ratings: action.rating };
    case "four & above":
      return { ...state, ratings: action.rating };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "CLEAR_ALL":
      return {
        ...state,
        sorting: null,
        priceRange: 5000,
        category:{
          men:false,
          women:false,
          kids:false,
          homeAndliving:false,
          beauty:false
        },
    
        ratings: null,
        includeOutOfStock: false,
        fastDelivery: false,
      };

      case "FILTER_BY_CATEGORY":
        return {...state,filterByCategory:action.payload}
    default:
      return state;
  }
};
