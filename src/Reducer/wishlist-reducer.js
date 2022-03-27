export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlistItem: action.payload };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlistItem: action.payload };
    default:
      return state;
  }
};
