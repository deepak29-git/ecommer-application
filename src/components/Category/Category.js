import "../Category/Category.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAxios } from "../../Api-data/useAxios";
import { useFilter } from "../../Context/filter-context";
import { Loader } from "../Loader/Loader";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const { setLoader } = useAxios();


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
      <Loader />
      <div className="five-item">
        {categories.map(({ _id, categoryName, categoryImage }) => (
          <div key={_id}>
            <Link to={`/category/${categoryName}`}>
              <img
                className="category-img"
                src={categoryImage}
                alt={categoryName}
              />
              <p className="fs-3 center-text semibold">{categoryName}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
