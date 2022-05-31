import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import '../OrderSummary/OrderSummary.css'
import { Header } from "../../components/Header/Header";
export const OrderSummary = () => {
const { state:{checkout} } = useCart();
const navigate=useNavigate()

  return (
    <>
    <Header/>
      <div className="order-summary-container">
          <div>
          <h3 className="success-text mb-1" >Your Order placed successfully</h3>
          <p className="success-text mb-1" >Thank you for shopping</p>
        <p><strong>Payment Id:</strong> {checkout}</p>
        <div className="center mt-1">
        <button onClick={()=>navigate('/products')} className="btn btn-outline-primary continue-shop-btn">Continue shopping</button>
        </div>
          </div>
      </div>
    </>
  )
};
