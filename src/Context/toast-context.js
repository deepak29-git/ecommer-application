import { createContext, useContext,useReducer } from "react";
import { toastReducer } from "../Reducer/toast-reducer";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toastState,toastDispatch]=useReducer(toastReducer,{
      addToCartToast:false,
      removeFromCart:false,
      addToWishlistToast:false,
      removeFromWishlistToast:false
  })
  

  return (
    <ToastContext.Provider value={{ toastState,toastDispatch}}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
