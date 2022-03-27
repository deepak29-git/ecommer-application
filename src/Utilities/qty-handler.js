import axios from "axios";

export const qtyHandler = async (product, value, dispatch) => {
  const { _id } = product;
  try {
    const { data } = await axios.post(
      `/api/user/cart/${_id}`,
      {
        action: {
          type: value,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "INCREMENT_DECREMENT", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};
