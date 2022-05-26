import { useCart } from "../../Context/cart-context";
import '../OrderSummary/OrderSummary.css'
export const OrderSummary = () => {
const { state:{checkout} } = useCart();

  return (
      <div className="order-summary-container">
          <div>
          <h3 className="success-text mb-1" >Your Order placed successfully</h3>
          <p className="success-text mb-1" >Thank you for shopping</p>
        <p><strong>Payment Id:</strong> {checkout}</p>
          </div>
      </div>
  )
};
