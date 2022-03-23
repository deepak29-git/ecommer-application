import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { addToCart } from "../../Utilities/add-to-cart";
export const ProductDisplay = ({ product }) => {
  const { dispatch, state } = useCart();
  const { cartItem } = state;
  const navigate = useNavigate();

  return (
    <main className="ecom-card card-content">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <span id="wishlist-icon" className="material-icons" onClick={()=>{
        addToWishList(product)
        dispatch({type:"ADD_TO_WISHLIST",payload:product})}}>
        favorite_border
      </span>
      <h3 className="card-title">{product.brand}</h3>
      <p>{product.title}</p>
      <p>{product.categoryName}</p>
      <p>Price:{product.price}</p>
      {product.inStock ? <div>In Stock</div> : <div>Out of Stock</div>}
      {product.fastDelivery ? (
        <div>Fast Delivery</div>
      ) : (
        <div>5 Days Minimum</div>
      )}
      <p>Rating:{product.rating}⭐</p>
      {cartItem.find((cartItem) => cartItem.id === product.id) ? (
        <button onClick={() => navigate("/cart")}>Go TO CART</button>
      ) : (
        <button
          onClick={() => {
            addToCart(product)
            dispatch({ type: "ADD_TO_CART", payload: product });
          }}
        >
          ADD TO CART
        </button>
      )}
    </main>
  );
};
