export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: action.payload,
      };
    case "REMOVE_FROM_CART":
      return { ...state, cartItem: action.payload };
    case "INCREMENT_DECREMENT":
      return { ...state, cartItem: action.payload };
    default:
      return state;
  }
};
