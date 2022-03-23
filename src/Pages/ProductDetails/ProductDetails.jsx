import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "../ProductDetails/ProductDetails.css";
import { Header } from "../../components/Header/Header";
import "../Product/Products.css";
import { useAxios } from "../../Api-data/useAxios";
import { addToCart } from "../../Utilities/add-to-cart";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const { dispatch } = useCart();
  const {loader,setLoader}=useAxios()
  
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    setLoader(true);
    const response = await axios.get(`/api/products/${id}`);
    setLoader(false);
    setProductDetails(response.data.product);
  };

  return (
    <>
      <Header />
      <div className="products-details-container">
        <img src={productDetails.image} alt={productDetails.title} />
        <div className="product-content ml-1">
          <h2 className="mb-half h2">{productDetails.title}</h2>
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
          <button
            onClick={() =>{addToCart(productDetails)
              dispatch({ type: "ADD_TO_CART", payload: productDetails })}
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
