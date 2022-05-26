import axios from "axios";

export const removeFromCart = async (product, dispatch,toastDispatch) => {
  const { _id } = product;
  try {
    const { data } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  
    dispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
    toastDispatch({type:"REMOVE_FROM_CART_TOAST",payload:true})
    setTimeout(()=>{
      toastDispatch({type:"REMOVE_FROM_CART_TOAST",payload:false})
    },2000)
  } catch (error) {
    console.log(error);
  }
};
