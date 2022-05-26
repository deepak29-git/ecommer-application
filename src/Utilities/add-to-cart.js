
import axios from "axios";
export const addToCart = async (product,dispatch,toastDispatch) => {
  const getToken = () =>localStorage.getItem("token");

 const {data}= await axios.post(
    "/api/user/cart",
    {
      product,
    },
    {
      headers: {
        authorization: getToken(), 
      },
    }
  );
  dispatch({ type: "ADD_TO_CART", payload: data.cart })
  toastDispatch({ type: "ADD_TO_CART_TOAST", payload: true })

  setTimeout(()=>{
    toastDispatch({ type: "ADD_TO_CART_TOAST", payload: false })
  },2000)
};
