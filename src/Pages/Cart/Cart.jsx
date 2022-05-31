import { Header } from "../../components/Header/Header";
import { useCart } from "../../Context/cart-context";
import { qtyHandler } from "../../Utilities/qty-handler";
import "./Cart.css";
import { useWishlist } from "../../Context/wishlist-context";
import { removeFromCart } from "../../Utilities/remove-from-cart";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/toast-context";
import { Toast } from "../../components/Toast/Toast";


export const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItem } = state;
  const {wishlistState, wishlistDispatch } = useWishlist();
  const {wishlistItem}=wishlistState
  const {toastState:{addToCartToast,removeFromCartToast,addToWishlistToast,removeFromWishlistToast},toastDispatch}=useToast()
  const navigate=useNavigate()

  let original_price = 0;
  let discount_price = 0;
  let delivery_charges = 0;
  cartItem.forEach((product) => {
    original_price += product.price * product.qty;
    discount_price += product.price*product.qty * (10 / 100);
    delivery_charges = product.price * (15 / 100);
  });


  const moveToWishlist = (product) => {
    if(wishlistItem.find(item=>item._id===product._id)){
      removeFromCart(product, dispatch,toastDispatch);
    }else{
      addToWishlist(product, wishlistDispatch,toastDispatch);
      removeFromCart(product, dispatch,toastDispatch);
    }
  };

  const placeOrderHandler=()=>{
    // navigate('/address')
    const options = {
      key: "rzp_test_XBpNClg6xjZMJk",
      amount:   ((original_price -discount_price +delivery_charges)*100).toFixed(0), 
      currency: "INR",
      name: "Shopio Corp",
      description: "shop now",
      handler: function (response){
          dispatch({type:"CHECKOUT",payload:response.razorpay_payment_id})
          navigate("/order_summary")
        },
        prefill: {
          name: "Deepak Goyal",
          email: "deepak123@gmail.com",
          contact: "8871807261"
        },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
  
  const rzp1 = new window.Razorpay(options)
  rzp1.open()
}


  return (
    <>
      <Header />
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
                flexDirection:"column"
              }}
            >
              <h1 className="mb-1" >YOUR CART IS EMPTY</h1>
              <button onClick={()=>navigate('/products')} className="btn btn-outline-primary continue-shop-btn">Continue shopping</button>
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
                            onClick={() => removeFromCart(product, dispatch,toastDispatch)}
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
        {cartItem.length === 0 ? (
          ""
        ) : (
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
                  <p className="discount">-₹{(discount_price).toFixed(2)}</p>
                </div>
                <div className="space-between my-half">
                  <p className="item-price">Delivery Charges</p>
                  <p>{(delivery_charges).toFixed(0)}</p>
                </div>
              <hr className="my-half"/>
                <div className="space-between">
                  <h4 className="my-half">TOTAL AMOUNT</h4>
                  <h4>
                    ₹
                    {(
                      original_price -
                      discount_price +
                      delivery_charges
                    ).toFixed(0)}
                  </h4>
                </div>
                <hr className="my-half" />
                <p className="discount ">
                  You will save ₹{discount_price.toFixed(0)} on this order
                </p>
              </div>
              <div className="btn-group">
                <button onClick={()=>placeOrderHandler()} className="btn btn-primary mt-1" id="login-btn">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {addToCartToast&&<Toast text="Item added to cart"/>}
          {removeFromCartToast&&<Toast text="Item removed from cart"/>}
          {addToWishlistToast&&<Toast text="Item added to wishlist"/>}
          {removeFromWishlistToast&&<Toast text="Item removed from wishlist"/>}
    </>
  );
};
