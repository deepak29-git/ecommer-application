import {useFilter} from '../../Context/filter-context'
import './Header.css'
import {Link, NavLink} from 'react-router-dom'
import { useCart } from '../../Context/cart-context';

export const Header = () => {
  const {dispatch} =useFilter()
  const {state}=useCart();
  return (
    <header className="ecom-header mt-1 plr-2 mb-1">
        <nav className="ecom-nav">
          <Link to="/" className="ecom-title black">
            <h2 >Shop<span className="ui-text">io</span></h2>
          </Link >
          <NavLink className="navlink" to="/">
            <div>Home</div>
          </NavLink>
          <NavLink className="navlink" to="/products">
          <div>Products</div>
          </NavLink>
          <div className="input-parent" onChange={(e)=>dispatch({type:"SEARCH",value:e.target.value})}>
            <input className="ecom-input" type="text" placeholder="Search for products brands and more" />
            <span id="ecom-search" className="material-icons">
              search
            </span>
          </div>
          <div className="ecom-group">
          <Link to="/login" className="btn btn-primary" id="login-btn">Login</Link>
          <Link to="/wishlist">
            <div className="badge">
              <span id="heart" className="material-icons black">favorite_border</span>
                <div className="number">0</div>
              </div>
            </Link>
            <Link to="/cart">
            <div className="badge">
              <span id="shopping-cart" className="material-icons black">shopping_cart</span>  
              <div className="number">{state.itemCount}</div>
            </div>
            </Link>
            </div>
        </nav>
    </header>
  )
};
