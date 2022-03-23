export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem,{...action.payload}],
        itemCount:state.itemCount+1,
        
      };  
      default :
      return state
  }
};
  