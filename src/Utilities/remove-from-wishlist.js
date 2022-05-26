import axios from "axios";


export const removeFromWishlist =async(product,wishlistDispatch,toastDispatch) => {
  const { _id } = product;

  const getToken = () =>localStorage.getItem("token");
 
 
  const response = await axios.delete(
    `/api/user/wishlist/${_id}`,

    {
      headers: {
        authorization: getToken(), 
      },
    }
  );

  wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:response.data.wishlist})
  toastDispatch({type:"REMOVE_FROM_WISHLIST_TOAST",payload:true})
  setTimeout(()=>{
    toastDispatch({type:"REMOVE_FROM_WISHLIST_TOAST",payload:false})
  },2000)
};
