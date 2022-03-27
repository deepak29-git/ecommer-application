import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../Reducer/wishlist-reducer";
import { getToken } from "../Utilities/add-to-wishlist";
import { useAuth } from "./auth-context";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItem: [],
  });

  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) return;
    (async () => {
      try {
        const { data } = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: getToken(),
          },
        });

        wishlistDispatch({ type: "INTIAL_WISHLIST", payload: data.wishlist });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
