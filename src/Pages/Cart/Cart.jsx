import axios from "axios";
import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { useCart } from "../../Context/cart-context";
// import { addToCart } from "../../Utilities/add-to-cart";
import "./Cart.css";
export const Cart = () => {
  const { state, dispatch } = useCart();

  const { cartItem } = state;

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/user/cart", {
        headers: {
          authorization: user.token, // passing token as an authorization header
        },
      });
      console.log(data);
      dispatch({ type: "ADD_TO_CART", payload: data.cart });
    })();
  }, []);

  return (
    <>
      <Header />
      <h3 className="center-text my-1">MY CART</h3>
      <div className="cart-main" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cartItem && cartItem.map(({ id, title, brand, image, price }) => (
            <main key={id} className="cart-container">
              <div className="card horizontal mb-2 ml-4">
                <div className="card-bg grey-border ">
                  <img className="horizonatal-img" src={image} alt={title} />
                  <div className="card-body horizontal-body ">
                    <h3>{brand}</h3>
                    <div className="card-title">{title}</div>
                    <div className="price ">
                      ₹{price}
                      <span className="price-before">{price}</span>
                      <div className="line"></div>
                      <div className="discount">{title}</div>
                    </div>
                    <div className="qty-container">
                      <p className="qty-title">{brand}</p>
                      <span id="add-qty" class="material-icons">
                        add
                      </span>
                      <input type="number" value={1} />
                      <span id="remove-qty" class="material-icons">
                        remove
                      </span>
                    </div>
                    <div className="btn-group ">
                      <button className="cart-btn btn-primary">
                        Remove from Cart
                      </button>
                      <button className="remove-cart btn">
                        Move to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          ))}
        </div>
        <div className="price-detail-main mb-2 ml-4">
          <div className="price-detail-container shadow">
            <h4>PRICE DETAILS</h4>
            <hr className="my-half" />
            <div className="price-description">
              <div className="space-between">
                <p className="item-price">Price(2 Items)</p>
                <p>₹4999</p>
              </div>
              <div className="space-between">
                <p className="item-price">Discount</p>
                <p>-₹1999</p>
              </div>
              <div className="space-between my-half">
                <p className="item-price">Price(2 Items)</p>
                <p>₹499</p>
              </div>

              <div className="space-between">
                <h4>TOTAL AMOUNT</h4>
                <h4>₹3499</h4>
              </div>
              <hr className="my-half" />
              <p>You will save ₹1999 on this order</p>
            </div>
            <div className="btn-group">
              <button className="btn btn-primary mt-1" id="login-btn">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
