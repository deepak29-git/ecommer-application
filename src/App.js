import "./App.css";
import { Products } from "./Pages/Product/Products";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { WishList } from "./Pages/WishList/WishList";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Cart } from "./Pages/Cart/Cart";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { OrderSummary } from "./Pages/OrderSummary/OrderSummary";
// import { Address } from "./components/Address/Address";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order_summary" element={<OrderSummary />} />
        {/* <Route path="/address" element={<Address />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
