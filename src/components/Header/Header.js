import { useFilter } from "../../Context/filter-context";
import "./Header.css";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-context";

export const Header = () => {
  const { auth, setAuth } = useAuth();
  const { dispatch } = useFilter();
  const { state } = useCart();
  const { cartItem } = state;
  const { wishlistState } = useWishlist();
  const { wishlistItem } = wishlistState;
  const navigate = useNavigate();
  const logoutHandler = () => {
    setAuth(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navIcon = {
    background: "none",
    border: "none",
    cursor: "pointer",
  };
  return (
    <header className="ecom-header plr-2">
      <nav className="standard-nav">
        <Link to="/" className="ecom-title black">
          <h2>
            Shop<span className="ui-text">io</span>
          </h2>
        </Link>
        <NavLink  className="navlink" to="/products">
          <div>Products</div>
        </NavLink>
        <div className="left-side">

        <div
          className="input-parent"
          onChange={(e) => dispatch({ type: "SEARCH", value: e.target.value })}
        >
          <input
            className="ecom-input standard-input"
            type="text"
            placeholder="Search for products, brands and more"
          />
          <span id="ecom-search" className="material-icons">
            search
          </span>
        </div>
        <div className="ecom-group">
          {auth ? (
            <button
              onClick={logoutHandler}
              className="btn btn-primary"
              id="login-btn"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary" id="login-btn">
                {" "}
                Login
              </button>
            </Link>
          )}

          <button
            style={navIcon}
            onClick={() => (!auth ? navigate("/login") : navigate("/wishlist"))}
            >
            <div className="badge">
              <span id="heart" className="material-icons black">
                favorite_border
              </span>
              {auth && <div className="number">{wishlistItem.length}</div>}
            </div>
          </button>
          <button
            style={navIcon}
            onClick={() => (auth ? navigate("/cart") : navigate("/login"))}
          >
            <div className="badge">
              <span id="shopping-cart" className="material-icons black">
                shopping_cart
              </span>
              {auth && <div className="number">{cartItem.length}</div>}
              
            </div>
          </button>
            </div>
        </div>
      </nav>
    </header>
  );
};
