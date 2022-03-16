import './Header.css'
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <header className="ecom-header mt-1 plr-2 mb-1">
        <nav className="ecom-nav">
          <Link to="/" className="ecom-title black">
            <h2 >Shop<span className="ui-text">io</span></h2>
          </Link>
          <div className="input-parent">
            <input className="ecom-input" type="text" placeholder="Search" />
            <span id="ecom-search" className="material-icons">
              search
            </span>
          </div>
          <div className="ecom-group">
          <Link to="/login" className="btn btn-primary" id="login-btn">Login</Link>
          <a href="/My-wishlist/wishlist.html">
            <div className="badge">
              <span id="heart" className="material-icons black">favorite_border</span>
                <div className="number">0</div>
              </div>
            </a>
            <a href="/Cart-management/cart.html">
            <div className="badge">
              <span id="shopping-cart" className="material-icons black">shopping_cart</span>  
              <div className="number">0</div>
            </div>
            </a>
            </div>
        </nav>
    </header>
  )
};
