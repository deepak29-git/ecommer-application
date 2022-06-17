import { useCart } from "../../Context/cart-context";
import "../PriceDetails/PriceDetails.css";
import { useNavigate } from "react-router-dom";
export const PriceDetails = ({
  addressSelector,
  placeHolder,
  printAddress,
}) => {
  const navigate = useNavigate();
  const {
    state: { cartItem },
  } = useCart();

  const placeOrderHandler = () => {
    navigate("/address");
  };

  let original_price = 0;
  let discount_price = 0;
  let delivery_charges = 0;

  cartItem.forEach((product) => {
    original_price += product.price * product.qty;
    discount_price += product.price * product.qty * (10 / 100);
    delivery_charges = product.price * (15 / 100);
  });

  const checkoutHandler = () => {
    const options = {
      key: "rzp_test_XBpNClg6xjZMJk",
      amount: (
        (original_price - discount_price + delivery_charges) *
        100
      ).toFixed(0),
      currency: "INR",
      name: "Shopio Corp",
      description: "shop now",
      handler: function (response) {
        dispatch({ type: "CHECKOUT", payload: response.razorpay_payment_id });
        navigate("/order_summary");
      },
      prefill: {
        name: "Deepak Goyal",
        email: "deepak123@gmail.com",
        contact: "8871807261",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      {cartItem.length !== 0 && (
        <div className="price-detail-main mb-2 ml-4">
          <div className="price-detail-container shadow">
            <h4>PRICE DETAILS</h4>
            <hr className="my-half" />
            <div className="price-description">
              <div className="space-between">
                <p className="item-price">Price({cartItem.length} Items)</p>
                <p className="my-half">₹{original_price}</p>
              </div>
              <div className="space-between">
                <p className="item-price green-text">Discount</p>
                <p className="discount">-₹{discount_price.toFixed(2)}</p>
              </div>
              <div className="space-between my-half">
                <p className="item-price">Delivery Charges</p>
                <p>{delivery_charges.toFixed(0)}</p>
              </div>
              <hr className="my-half" />
              <div className="space-between">
                <h4 className="my-half">TOTAL AMOUNT</h4>
                <h4>
                  ₹
                  {(original_price - discount_price + delivery_charges).toFixed(
                    0
                  )}
                </h4>
              </div>
              <hr className="my-half" />
              <p className="discount ">
                You will save ₹{discount_price.toFixed(0)} on this order
              </p>
            </div>
            <div className="btn-group">
              {placeHolder === "placeHolder" ? (
                <button
                  onClick={() => placeOrderHandler()}
                  className="btn btn-primary mt-1"
                  id="login-btn"
                >
                  PLACE ORDER
                </button>
              ) : (
                <button
                  className={
                    !addressSelector || printAddress.length === 0
                      ? "disable-btn-checkout btn"
                      : "btn btn-primary mt-1"
                  }
                  disabled={
                    addressSelector || !printAddress.length === 0
                      ? false
                      : true 
                  }
                  onClick={() => checkoutHandler()}
                  id="login-btn"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
