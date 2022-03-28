import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "../ProductDetails/ProductDetails.css";
import { Header } from "../../components/Header/Header";
import "../Product/Products.css";
import "../ProductDetails/ProductDetails.css";
import { useAxios } from "../../Api-data/useAxios";
import { addToCart } from "../../Utilities/add-to-cart";
import { useAuth } from "../../Context/auth-context";
import { useWishlist } from "../../Context/wishlist-context";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";
export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItem } = wishlistState;
  const { cartItem } = state;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { loader, setLoader } = useAxios();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    setLoader(true);
    const response = await axios.get(`/api/products/${id}`);
    setLoader(false);
    setProductDetails(response.data.product);
  };

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
      <Header />
      <div className="products-details-container">
        <div className="wishlist-icon-container mt-4">
          <img src={productDetails.image} alt={productDetails.title} />
          {wishlistItem.find((item) => item._id === productDetails._id) ? (
            <span
              id="wishlist-icon"
              className="material-icons icon wishlisted"
              onClick={() => wishlistHandler(productDetails)}
            >
              favorite
            </span>
          ) : (
            <span
              id="wishlist-icon"
              className="material-icons icon"
              onClick={() => wishlistHandler(productDetails)}
            >
              favorite_border
            </span>
          )}
        </div>

        <div className="product-content ml-1">
          <h2 className="mb-half h2 mt-3">{productDetails.title}</h2>
          <h4 className="mb-half mt-half">₹{productDetails.price}</h4>
          <hr />
          <p className="fs-4 mb-half mt-half">
            Brand: <span className="grey-text">{productDetails.brand}</span>
          </p>
          {loader && (
            <div className="loading-gif">
              <img
                src="https://c.tenor.com/gJLmlIn6EvEAAAAC/loading-gif.gif"
                alt="loading"
              />
            </div>
          )}
          <p className="mb-half">
            Product Details:{" "}
            <span className="grey-text">{productDetails.description}</span>
          </p>
          <p className="mb-half">
            Rating: <span className="grey-text">{productDetails.rating}⭐</span>
          </p>

          {cartItem.find((item) => item._id === productDetails._id) ? (
            <button
              className="btn add-to-cart btn-primary"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </button>
          ) : (
            <button
              className="btn add-to-cart btn-primary"
              onClick={() =>
                auth ? addToCart(productDetails, dispatch) : navigate("/login")
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
