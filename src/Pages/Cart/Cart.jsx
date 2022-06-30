import { useCart } from "../../Context/cart-context";
import { qtyHandler } from "../../Utilities/qty-handler";
import "./Cart.css";
import { useWishlist } from "../../Context/wishlist-context";
import { removeFromCart } from "../../Utilities/remove-from-cart";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/toast-context";
import { Toast } from "../../components/Toast/Toast";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";

export const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItem } = state;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItem } = wishlistState;
  const {
    toastState: {
      addToCartToast,
      removeFromCartToast,
      addToWishlistToast,
      removeFromWishlistToast,
    },
    toastDispatch,
  } = useToast();
  const navigate = useNavigate();

  const moveToWishlist = (product) => {
    if (wishlistItem.find((item) => item._id === product._id)) {
      removeFromCart(product, dispatch, toastDispatch);
    } else {
      addToWishlist(product, wishlistDispatch, toastDispatch);
      removeFromCart(product, dispatch, toastDispatch);
    }
  };


  return (
    <>
      <h2 className="center-text my-1">MY CART ({cartItem.length})</h2>

      <div className={`${cartItem.length > 0 && `cart-main`}`}>
        <div>
          {cartItem.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "80vh",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1 className="mb-1">YOUR CART IS EMPTY</h1>
              <button
                onClick={() => navigate("/products")}
                className="btn btn-outline-primary continue-shop-btn"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            cartItem.map((product) => {
              const {
                _id,
                title,
                brand,
                image,
                price,
                qty,
                selling_price,
                discount,
              } = product;

              return (
                <main key={_id} className="cart-container">
                  <div className="card horizontal mb-2 ml-4">
                    <div className="card-bg grey-border ">
                      <img
                        className="horizonatal-img"
                        src={image}
                        alt={title}
                      />
                      <div className="card-body horizontal-body ">
                        <h3>{brand}</h3>
                        <div className="card-title">{title}</div>
                        <div className="price ">
                          ₹{price}
                          <span
                            style={{ textDecoration: "line-through" }}
                            className="price-before grey-text"
                          >
                            ₹{selling_price}
                          </span>
                          <span className="discount">{discount}% off</span>
                        </div>
                        <div className="qty-container">
                          <p className="qty-title">Qty.</p>
                          {qty <= 1 ? (
                            <button
                              onClick={() =>
                                qtyHandler(product, "decrement", dispatch)
                              }
                              disabled
                            >
                              <span id="remove-qty" className="material-icons">
                                remove
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                qtyHandler(product, "decrement", dispatch)
                              }
                            >
                              <span id="remove-qty" className="material-icons">
                                remove
                              </span>
                            </button>
                          )}
                          <span style={{ margin: "0 0.7rem" }}>{qty}</span>
                          <button>
                            <span
                              onClick={() =>
                                qtyHandler(product, "increment", dispatch)
                              }
                              id="add-qty"
                              className="material-icons"
                            >
                              add
                            </span>
                          </button>
                        </div>
                        <div className="btn-group ">
                          <button
                            onClick={() =>
                              removeFromCart(product, dispatch, toastDispatch)
                            }
                            className="cart-btn btn-primary"
                          >
                            Remove from Cart
                          </button>
                          <button
                            onClick={() => moveToWishlist(product)}
                            className="remove-cart btn"
                          >
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              );
            })
          )}
        </div>
        <PriceDetails placeHolder="placeHolder"/>
         
      </div>
      {addToCartToast && <Toast text="Item added to cart" />}
      {removeFromCartToast && <Toast text="Item removed from cart" />}
      {addToWishlistToast && <Toast text="Item added to wishlist" />}
      {removeFromWishlistToast && <Toast text="Item removed from wishlist" />}
    </>
  );
};
