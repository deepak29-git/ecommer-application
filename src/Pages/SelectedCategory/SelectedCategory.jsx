import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../Context/wishlist-context";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../Context/auth-context";
import { addToWishlist } from "../../Utilities/add-to-wishlist";
import "../SelectedCategory/SelectedCategory.css";
function SelectedCategory() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { categoryName } = useParams();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItem } = wishlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();

  const getSelectedCategory = async () => {
    try {
      const { data } = await axios.get(`/api/categories/${categoryName}`);
      console.log(data.products);
      setSelectedCategory(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const wishlistHandler = (categories) => {
    if (wishlistItem.find((item) => item._id === categories._id)) {
      removeFromWishlist(categories, wishlistDispatch);
    } else if (auth) {
      addToWishlist(categories, wishlistDispatch);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getSelectedCategory();
  }, []);

  return (
    <div>
      <Header />

      <div className="grid-container-category">
        {selectedCategory.map((categories) => {
          const {
            _id,
            brand,
            title,
            categoryName,
            price,
            rating,
            image,
            inStock,
            fastDelivery,
          } = categories;
          return (
            <main key={_id} className="ecom-card category-card card-content">
              <Link to={`/products/${_id}`}>
                <img src={image} alt={title} />
              </Link>
              {wishlistItem.find((item) => item._id === _id) ? (
                <span
                  id="wishlist-icon"
                  className="material-icons icon wishlisted"
                  onClick={() => wishlistHandler(categories)}
                >
                  favorite
                </span>
              ) : (
                <span
                  id="wishlist-icon"
                  className="material-icons icon"
                  onClick={() => wishlistHandler(categories)}
                >
                  favorite_border
                </span>
              )}

              <h3 className="card-title">{brand}</h3>
              <p>{title}</p>
              <p>{categoryName}</p>
              <p>Price:{price}</p>
              {inStock ? <div>In Stock</div> : <div>Out of Stock</div>}
              {fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>5 Days Minimum</div>
              )}
              <p>Rating:{rating}⭐</p>
            </main>
          );
        })}
      </div>
    </div>
  );
}

export { SelectedCategory };
