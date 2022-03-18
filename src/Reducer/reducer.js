export const reducer = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.value };
    case "men":
      return { ...state, category: "men" };
    case "women":
      return { ...state, category: "women" };
    case "kids":
      return { ...state, category: "kids" };
    case "home&living":
      return { ...state, category: "home&living" };
    case "beauty":
      return { ...state, category: "beauty" };
    case "three & above":
      return { ...state, ratings: action.rating };
    case "four & above":
      return { ...state, ratings: action.rating };
    case "ROADSTER":
      return {...state,brand:{...state.brand,roadster:!state.brand.roadster}}
    case "NAUTICA":
      return {...state,brand:{...state.brand,nautica:!state.brand.nautica}}
    case "PUMA":
      return {...state,brand:{...state.brand,puma:!state.brand.puma}}
    case "ADIDAS":
      return {...state,brand:{...state.brand,adidas:!state.brand.adidas}}
    case "H&M":
      return {...state,brand:{...state.brand,hAndm:!state.brand.hAndm}}
    case "COLORBAR":
      return {...state,brand:{...state.brand,colorbar:!state.brand.colorbar}}
    case "KLOTTHE":
      return {...state,brand:{...state.brand,klotthe:!state.brand.klotthe}}
    case "TALES & STORIES":
      return {...state,brand:{...state.brand,talesAndStories:!state.brand.talesAndStories}}
    case "DOVE":
      return {...state,brand:{...state.brand,dove:!state.brand.dove}}
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
      case "CLEAR_ALL":
        return {...state, 
          sorting:null,
          priceRange: 5000,
          category:null,
          ratings:null,
          brand:{roadster:false,
          nautica:false,puma:false,adidas:false,hAndm:false,colorbar:false,klotthe:false,talesAndStories:false,dove:false},
          includeOutOfStock:false,
          fastDelivery:false}
    default:
      return state;
  }
};
