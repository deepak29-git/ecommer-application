// import { useEffect } from "react"
import axios from "axios";
export const addToCart = async (product) => {
  
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await axios.post(
    "/api/user/cart",
    {
      product,
    },
    {
      headers: {
        authorization: user.token, // passing token as an authorization header
      },
    }
  );



  // localStorage.setItem('cart',JSON.stringify(cartItem))
};
