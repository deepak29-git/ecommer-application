
import axios from "axios";
export const addToCart = async (product,dispatch,toastDispatch,setLoader) => {
  const getToken = () =>localStorage.getItem("token");
  setLoader(true)
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
  setLoader(false)
  dispatch({ type: "ADD_TO_CART", payload: data.cart })
  toastDispatch({ type: "ADD_TO_CART_TOAST", payload: true })

  setTimeout(()=>{
    toastDispatch({ type: "ADD_TO_CART_TOAST", payload: false })
  },2000)
};
