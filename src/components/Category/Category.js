
import "../Category/Category.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/filter-context";

export const Category = () => {
  const {dispatch}=useFilter();
  return (
    <>
      <p className="center-text semibold fs-2 mt-2 mb-2 category-container">Featured Categories</p>
      <div className="five-item">
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"MEN"})}>
            <img className="category-img" src="https://cdn.shopify.com/s/files/1/2219/4051/files/mens_banner_d378ca01-0c0f-44d9-b3fb-45bcd2680905_1024x1024_crop_center.jpg?v=1645085668" alt="mens" />
            <p className="fs-3 center-text semibold">Mens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"WOMEN"})}>
            <img className="category-img" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="womens" />
            <p className="fs-3 center-text semibold">Womens</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"KIDS"})}>
            <img className="category-img" src="https://images.unsplash.com/photo-1511733897353-5b04f82435a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="kids" />
            <p className="fs-3 center-text semibold">Kids</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products" onClick={()=>dispatch({type:"HOME & LIVING"})}>
            <img className="category-img" src="https://images.unsplash.com/photo-1599643332904-ddc6060f3289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80" alt="homeAndLiving" />
            <p className="fs-3 center-text semibold">Home & Living</p>
          </Link>
        </div>
        <div className="scale" onClick={()=>dispatch({type:"BEAUTY"})}>
          <Link to="/products">
            <img className="category-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/makeup-supplies-amidst-shiny-glitter-royalty-free-image-1640037507.jpg?crop=0.66635xw:1xh;center,top&resize=640:*" alt="beauty" />
            <p className="fs-3 center-text semibold">Beauty</p>
          </Link>
        </div>
      </div>
    </>
  );
};
