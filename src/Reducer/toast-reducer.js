export const toastReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART_TOAST":
      return { ...state, addToCartToast: action.payload };
    case "REMOVE_FROM_CART_TOAST":
      return { ...state, removeFromCartToast: action.payload };
    case "ADD_TO_WISHLIST_TOAST":
      return { ...state, addToWishlistToast: action.payload };
    case "REMOVE_FROM_WISHLIST_TOAST":
      return { ...state, removeFromWishlistToast: action.payload };
  }
};
