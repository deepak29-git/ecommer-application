import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { addToCart } from "../../Utilities/add-to-cart";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-context";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";
import { useToast } from "../../Context/toast-context";
import fastDelivery from '../../assets/fast-delivery.png'
export const ProductDisplay = ({ product }) => {
  const { dispatch, state } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItem } = wishlistState;
  const { cartItem } = state;
  const {toastDispatch}=useToast()

  const { auth } = useAuth();
  const navigate = useNavigate();

  const wishlistHandler = (product) => {
    if (wishlistItem.find((item) => item._id === product._id)) {
      removeFromWishlist(product, wishlistDispatch,toastDispatch);
      
    } else if (auth) {
      addToWishlist(product, wishlistDispatch,toastDispatch);
      
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <main className="ecom-card">
        <Link to={`/products/${product._id}`}>
          <img className={`${!product.inStock?"blur-bg":"card-image"}`} src={product.image} alt={product.title} />
        </Link>
        {wishlistItem.find((item) => item._id === product._id) ? (
          <span
            id="wishlist-icon"  
            className="material-icons icon wishlisted"
            onClick={() => wishlistHandler(product)}
          >
            favorite
          </span>
        ) : (
          <span
            id="wishlist-icon"
            className="material-icons icon"
            onClick={() => wishlistHandler(product)}
          >
            favorite_border
          </span>
        )}
        <div className="card-content">
          <div className="space-between">
        <h3 className="card-title">{product.brand}</h3>
        {product.fastDelivery ? (
          <img className="icon" src={fastDelivery} alt="fast-delivery"/>
          ):<div className="mb-2"></div>}
        </div>
        <p>{product.title}</p>
        <p>{product.categoryName}</p>
        <p>₹{product.price}</p>
        {!product.inStock && <div className="out-of-stock-badge">out of stock</div>}
        <p>Rating:{product.rating}⭐</p>
            </div>
        {cartItem.find((item) => item._id === product._id) ? (
            <button
            className="btn product-page-btn btn-primary"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </button>
          ) : (
            <button disabled={!product.inStock?true:false}
              className="btn btn-primary product-page-btn"
              onClick={() =>
                auth ? addToCart(product, dispatch,toastDispatch) : navigate("/login")
              }
            >
              Add to Cart
            </button>
          )}
    </main>
    </>
  );
};
