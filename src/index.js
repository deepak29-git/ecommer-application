import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./Context/filter-context";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Context/cart-context";
import { AuthProvider } from "./Context/auth-context";
import { WishlistProvider } from "./Context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
