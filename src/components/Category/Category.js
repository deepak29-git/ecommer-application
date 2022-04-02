import "../Category/Category.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAxios } from "../../Api-data/useAxios";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const { loader, setLoader } = useAxios();
  const getCategoryItem = async () => {
    setLoader(true);
    const { data } = await axios.get("/api/categories");
    setLoader(false);
    setCategories(data.categories);
  };

  useEffect(() => {
    getCategoryItem();
  }, []);

  return (
    <>
      <p className="center-text semibold fs-2 mb-2 category-container">
        Featured Categories
      </p>
      {loader && <h1 className="center-text">Loading...</h1>}
      <div className="five-item">
        {categories.map((category) => {
          const { _id, categoryName, categoryImage } = category;
          return (
            <Link to={`/category/${categoryName}`}>
              <div key={_id}>
                <img
                  className="category-img"
                  src={categoryImage}
                  alt={categoryName}
                />
                <p className="fs-3 center-text semibold">{categoryName}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
