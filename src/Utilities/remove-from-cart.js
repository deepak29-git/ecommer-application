import axios from "axios";

export const removeFromCart = async (product, dispatch) => {
  const { _id } = product;
  try {
    const { data } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    console.log(data.cart)
    dispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};
