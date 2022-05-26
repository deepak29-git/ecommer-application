import axios from "axios";
const getToken = () => localStorage.getItem("token");

const addToWishlist = async (product, wishlistDispatch,toastDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    toastDispatch({ type: "ADD_TO_WISHLIST_TOAST", payload: true })

    setTimeout(()=>{
      toastDispatch({ type: "ADD_TO_WISHLIST_TOAST", payload: false })
    },2000)
  } catch (error) {
    console.log(error);
  }
};

export { getToken, addToWishlist };
