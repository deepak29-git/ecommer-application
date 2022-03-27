import axios from "axios";


export const removeFromWishlist =async(product,wishlistDispatch) => {
  const { _id } = product;

  const getToken = () =>localStorage.getItem("token");
 
 
  const response = await axios.delete(
    `/api/user/wishlist/${_id}`,

    {
      headers: {
        authorization: getToken(), // passing token as an authorization header
      },
    }
  );

  wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:response.data.wishlist})
};
