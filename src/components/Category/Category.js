import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import electronics from "../../assets/electronics.jpg";
import mobile from "../../assets/mobile.jpg";
import grocery from "../../assets/grocery.jpg";
import '../Category/Category.css'
import {Link} from 'react-router-dom'

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
            <img src={electronics} alt="electronics" />
            <p className="fs-3 center-text semibold">Electronics</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={mobile} alt="mobile" />
            <p className="fs-3 center-text semibold">Mobile</p>
          </Link>
        </div>
        <div className="scale">
          <Link to="/products">
            <img src={grocery} alt="grocery" />
            <p className="fs-3 center-text semibold">Grocery</p>
          </Link>
        </div>
      </div>
    </>
  );
};
