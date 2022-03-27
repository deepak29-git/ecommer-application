import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { addToCart } from "../../Utilities/add-to-cart";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-context";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";
import { useState } from "react";
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
      <main className="ecom-card card-content">
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

        <h3 className="card-title">{product.brand}</h3>
        <p>{product.title}</p>
        <p>{product.categoryName}</p>
        <p>Price:{product.price}</p>
        {product.inStock ? <div>In Stock</div> : <div>Out of Stock</div>}
        {product.fastDelivery ? (
          <div>Fast Delivery</div>
        ) : (
          <div>5 Days Minimum</div>
        )}
        <p>Rating:{product.rating}⭐</p>
        {cartItem.find((cartItem) => cartItem._id === product._id) ? (
          <button className="btn btn-primary" onClick={() => navigate("/cart")}>
            Go TO CART
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() =>
              auth ? addToCart(product, dispatch) : navigate("/login")
            }
          >
            ADD TO CART
          </button>
        )}
      </main>
    </>
  );
};
