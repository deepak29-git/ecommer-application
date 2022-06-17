import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "../ProductDetails/ProductDetails.css";
import "../Product/Products.css";
import "../ProductDetails/ProductDetails.css";
import { useAxios } from "../../Api-data/useAxios";
import { addToCart } from "../../Utilities/add-to-cart";
import { useAuth } from "../../Context/auth-context";
import { useWishlist } from "../../Context/wishlist-context";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import { removeFromWishlist } from "../../Utilities/remove-from-wishlist";
import { useToast } from "../../Context/toast-context";
import { Toast } from "../../components/Toast/Toast";
import { Loader } from "../../components/Loader/Loader";
import buttonLoader from '../../assets/buttonLoader.gif'

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useCart();
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
  const { cartItem } = state;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const {loader, setLoader } = useAxios();

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
      removeFromWishlist(product, wishlistDispatch, toastDispatch);
    } else if (auth) {
      addToWishlist(product, wishlistDispatch, toastDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
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
          <Loader />
          <p className="mb-half">
            Product Details:{" "}
            <span className="grey-text">{productDetails.description}</span>
          </p>
          <p className="mb-half">
            Rating: <span className="grey-text">{productDetails.rating}⭐</span>
          </p>

          {cartItem.find((item) => item._id === productDetails._id) ? (
            <button
            className="btn product-page-btn btn-primary"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
              
              
            </button>
          ) : (
            productDetails.inStock&&<button
              disabled={loader ? true:false}
              className={loader?"disable-btn btn product-page-btn":`btn btn-primary product-page-btn`}
              onClick={() =>{
                auth ? addToCart(productDetails, dispatch,toastDispatch,setLoader) : navigate("/login")
              }
              }
            >
              {loader?<img className="loader-icon" src={buttonLoader} alt="...loading"/>:"Add to Cart"}
              
            </button>
          )}
        </div>
      </div>
      {addToCartToast && <Toast text="Item added to cart" />}
      {removeFromCartToast && <Toast text="Item removed from cart" />}
      {addToWishlistToast && <Toast text="Item added to wishlist" />}
      {removeFromWishlistToast && <Toast text="Item removed from wishlist" />}
    </>
  );
};
