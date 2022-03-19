import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import kids from "../../assets/kids.jpg";
import homeAndLiving from "../../assets/home-and-living.jpg";
import beauty from "../../assets/beauty.jpg";
import "../Category/Category.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/filter-context";

export const Category = () => {
  const {dispatch}=useFilter();
  return (
    <>
      <p className="center-text semibold fs-2 mt-2 mb-2">Featured Categories</p>
      <div className="five-item">
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"MEN"})}>
            <img src={mens} alt="mens" />
            <p className="fs-3 center-text semibold">Mens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"WOMEN"})}>
            <img src={womens} alt="womens" />
            <p className="fs-3 center-text semibold">Womens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"KIDS"})}>
            <img src={kids} alt="kids" />
            <p className="fs-3 center-text semibold">Kids</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"HOME & LIVING"})}>
            <img src={homeAndLiving} alt="homeAndLiving" />
            <p className="fs-3 center-text semibold">Home & Living</p>
          </Link>
        </div>
        <div className="scale" onClick={()=>dispatch({type:"BEAUTY"})}>
          <Link to="/products">
            <img src={beauty} alt="beauty" />
            <p className="fs-3 center-text semibold">Beauty</p>
          </Link>
        </div>
      </div>
    </>
  );
};
