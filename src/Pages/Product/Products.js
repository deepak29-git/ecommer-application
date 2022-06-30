import "./Products.css";
import { ProductDisplay } from "./ProductDisplay";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { getSortedProducts } from "../../Utilities/sort";
import { useFilter } from "../../Context/filter-context";
import { useAxios } from "../../Api-data/useAxios";
import { getPriceRange } from "../../Utilities/priceRange";
import { getCategory } from "../../Utilities/category";
import { getRating } from "../../Utilities/rating";
import { getIncludeOutOfStock } from "../../Utilities/includeOutOfStock";
import { getFastDelivery } from "../../Utilities/fastDelivery";
import { getClearAll } from "../../Utilities/clearAll";
import { useToast } from "../../Context/toast-context";
import { getSearch } from "../../Utilities/search";
import { Toast } from "../../components/Toast/Toast";
import { Loader } from "../../components/Loader/Loader";
export const Products = () => {
  const { state } = useFilter();
  const {
    toastState: {
      addToCartToast,
      removeFromCartToast,
      addToWishlistToast,
      removeFromWishlistToast,
    },
  } = useToast();
  const {
    sorting,
    priceRange,
    category,
    ratings,
    includeOutOfStock,
    fastDelivery,
    search,
    clearAll,
  } = state;

  const { loader, data } = useAxios();
  const sortedByPrice = getSortedProducts(data, sorting);
  const sortedByPriceRange = getPriceRange(sortedByPrice, priceRange);
  const sortedByRatings = getRating(sortedByPriceRange, ratings);
  const sortedByIncludeOutOfStock = getIncludeOutOfStock(
    sortedByRatings,
    includeOutOfStock
  );
  const sortedByFastDelivery = getFastDelivery(
    sortedByIncludeOutOfStock,
    fastDelivery
  );
  const dataClear = getClearAll(sortedByFastDelivery, clearAll);
  const searchProduct = getSearch(dataClear, search);
  const sortedData = getCategory(searchProduct, category);

  return (
    <div>
      <h2 className="center-text">All Products</h2>
      <div className="grid-container">
        <Sidebar />
        <div className="ecom-main">
          {loader && <Loader center="center" />}
          
          {!loader&&sortedData.length===0?<h3 className="center-txt">No Result</h3>:sortedData.map((product) => (
            <ProductDisplay key={product._id} product={product} />
          ))}
          {addToCartToast && <Toast text="Item added to cart" />}
          {removeFromCartToast && <Toast text="Item removed from cart" />}
          {addToWishlistToast && <Toast text="Item added to wishlist" />}
          {removeFromWishlistToast && (
            <Toast text="Item removed from wishlist" />
          )}
        </div>
      </div>
    </div>
  );
};
