import { createContext, useContext, useReducer} from "react";
import { cartReducer } from "../Reducer/cart-reducer";

const CartContext=createContext(null);

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,{
        cartItem:[]
    })
    return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
}

const useCart=()=>useContext(CartContext)

export {useCart,CartProvider}