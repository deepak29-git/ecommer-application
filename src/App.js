import "./App.css";
import { Products } from "./Pages/Product/Products";
import {Routes,Route} from 'react-router-dom'
import {Home} from './Pages/Home/Home'
import {WishList} from './Pages/WishList/WishList'
import {Login} from './Pages/Login/Login'
import {Signup} from './Pages/Signup/Signup'
import {Cart} from './Pages/Cart/Cart'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes> 
    </div>
  );
}

export default App;
