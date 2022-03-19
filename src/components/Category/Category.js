import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import kids from "../../assets/kids.jpg";
import homeAndLiving from "../../assets/home-and-living.jpg";
import beauty from "../../assets/beauty.jpg";
import "../Category/Category.css";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <>
      <p className="center-text semibold fs-2 mt-2 mb-2">Featured Categories</p>
      <div className="five-item">
        <div className="scale">
          <Link to="/products">
            <img src={mens} alt="mens" />
            <p className="fs-3 center-text semibold">Mens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={womens} alt="womens" />
            <p className="fs-3 center-text semibold">Womens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={kids} alt="kids" />
            <p className="fs-3 center-text semibold">Kids</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={homeAndLiving} alt="homeAndLiving" />
            <p className="fs-3 center-text semibold">Home & Living</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={beauty} alt="beauty" />
            <p className="fs-3 center-text semibold">Beauty</p>
          </Link>
        </div>
      </div>
    </>
  );
};
