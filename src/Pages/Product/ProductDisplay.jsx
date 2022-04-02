import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { addToCart } from "../../Utilities/add-to-cart";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-context";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";

export const ProductDisplay = ({ product }) => {
  const { dispatch, state } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItem } = wishlistState;
  const { cartItem } = state;

  const { auth } = useAuth();
  const navigate = useNavigate();

  const wishlistHandler = (product) => {
    if (wishlistItem.find((item) => item._id === product._id)) {
      removeFromWishlist(product, wishlistDispatch);
    } else if (auth) {
      addToWishlist(product, wishlistDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <main className="ecom-card ">
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.title} />
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
        <h3 className="card-title">{product.brand}</h3>
        <p>{product.title}</p>
        <p>{product.categoryName}</p>
        <p>₹{product.price}</p>
        {product.inStock ? <div>In Stock</div> : <div>Out of Stock</div>}
        {product.fastDelivery ? (
          <div>Fast Delivery</div>
          ) : (
            <div>5 Days Minimum</div>
            )}
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
            <button
              className="btn btn-primary product-page-btn"
              onClick={() =>
                auth ? addToCart(product, dispatch) : navigate("/login")
              }
            >
              Add to Cart
            </button>
          )}

      </main>
    </>
  );
};
