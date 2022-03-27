import axios from "axios";
const getToken = () => localStorage.getItem("token");

const addToWishlist = async (product, wishlistDispatch) => {
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
  } catch (error) {
    console.log(error);
  }
};

export { getToken, addToWishlist };
