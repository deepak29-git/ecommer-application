import { Header } from "../../components/Header/Header";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import { addToCart } from "../../Utilities/add-to-cart";
import { qtyHandler } from "../../Utilities/qty-handler";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";
import "../WishList/WishList.css";
import { useToast } from "../../Context/toast-context";
import { Toast } from "../../components/Toast/Toast";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const {toastState:{addToCartToast,removeFromCartToast,addToWishlistToast,removeFromWishlistToast},toastDispatch}=useToast()
  const { wishlistItem } = wishlistState;
  const { state, dispatch } = useCart();
  const { cartItem } = state;
  const navigate=useNavigate()
  const moveToCart = (product) => {
    if (cartItem.find((item) => item._id === product._id)) {
      qtyHandler(product, "increment", dispatch);
      removeFromWishlist(product, wishlistDispatch,toastDispatch);
    } else {
      addToCart(product, dispatch,toastDispatch);
      removeFromWishlist(product, wishlistDispatch,toastDispatch);
    }
  };

  return (
    <>
      <h2 className="center-text my-1">My Wishlist ({wishlistItem.length})</h2>
      <div className={`${wishlistItem.length > 0 && `wishlist-parent`}`}>
        {wishlistItem.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "80vh",
              flexDirection:"column",
              justifyContent: "center",
            }}
          >
            <h1 className="mb-1">YOUR WISHLIST IS EMPTY</h1>
            <button onClick={()=>navigate('/products')} className="btn btn-outline-primary continue-shop-btn">Continue shopping</button>
          </div>
        ) : (
          wishlistItem.map((product) => {
            const { _id, image, title, price, selling_price, discount, brand } =
              product;

            return (
              <main key={_id} className=" wishlist-container mt-4 plr-1">
                <div className="ecom-card wishlist-card">
                  <div className="product-image">
                    <img className="image" src={image} alt={title} />
                  </div>
                  <div className="card-content">
                    <h3 className="h3">{brand}</h3>
                    <div className="card-title ">{title}</div>
                    <div className="price ">
                      <span className="price-now">₹{price}</span>
                      <span
                        className="price-before"
                        style={{ textDecoration: "line-through" }}
                      >
                        ₹{selling_price}
                      </span>
                      <span className="discount">{discount}% off</span>
                    </div>
                    <span
                      className="material-icons icon wishlisted wishlist-cross-icon"
                      onClick={() =>
                        removeFromWishlist(product, wishlistDispatch,toastDispatch)
                      }
                    >
                      highlight_off
                    </span>
                    <div className="center mb-1">
                     
                    </div>
                  </div>
                    <button
                        onClick={() => moveToCart(product)}
                        className="btn btn-outline-primary go-to-cart"
                      >
                        Move to Cart
                      </button>
                </div>
                {addToCartToast&&<Toast text="Item added to cart"/>}
          {removeFromCartToast&&<Toast text="Item removed from cart"/>}
          {addToWishlistToast&&<Toast text="Item added to wishlist"/>}
          {removeFromWishlistToast&&<Toast text="Item removed from wishlist"/>}
              </main>
            );
          })
        )}
         
      </div>
     
    </>
  );
};
