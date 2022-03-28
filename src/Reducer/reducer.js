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
      case "one & above":
        return { ...state, ratings: action.rating };
      case "two & above":
        return { ...state, ratings: action.rating };
    case "three & above":
      return { ...state, ratings: action.rating };
    case "four & above":
      return { ...state, ratings: action.rating };
    case "ROADSTER":
      return {
        ...state,
        brand: { ...state.brand, roadster: !state.brand.roadster },
      };
    case "NAUTICA":
      return {
        ...state,
        brand: { ...state.brand, nautica: !state.brand.nautica },
      };
    case "PUMA":
      return { ...state, brand: { ...state.brand, puma: !state.brand.puma } };
    case "ADIDAS":
      return {
        ...state,
        brand: { ...state.brand, adidas: !state.brand.adidas },
      };
    case "H&M":
      return { ...state, brand: { ...state.brand, hAndm: !state.brand.hAndm } };
    case "COLORBAR":
      return {
        ...state,
        brand: { ...state.brand, colorbar: !state.brand.colorbar },
      };
    case "KLOTTHE":
      return {
        ...state,
        brand: { ...state.brand, klotthe: !state.brand.klotthe },
      };
    case "TALES & STORIES":
      return {
        ...state,
        brand: {
          ...state.brand,
          talesAndStories: !state.brand.talesAndStories,
        },
      };
    case "DOVE":
      return { ...state, brand: { ...state.brand, dove: !state.brand.dove } };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "CLEAR_ALL":
      return {
        ...state,
        sorting: null,
        priceRange: 5000,
        category: {
          men:false,
          women:false,
          kids:false,
          homeAndliving:false,
          beauty:false
        },
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
      };

    default:
      return state;
  }
};
