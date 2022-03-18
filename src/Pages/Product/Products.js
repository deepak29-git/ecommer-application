import "./Products.css";
import { ProductDisplay } from "./ProductDisplay";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { getSortedProducts } from "../../Utilities/sort";
import { useFilter } from "../../Context/filter-context";
import { useAxios } from "../../Api-data/useAxios";
import { getPriceRange } from "../../Utilities/priceRange";
import { getCategory } from "../../Utilities/category";
import { getRating } from "../../Utilities/rating";
import { getBrand } from "../../Utilities/brand";
import { getIncludeOutOfStock } from "../../Utilities/includeOutOfStock";
import { getFastDelivery } from "../../Utilities/fastDelivery";
import {getClearAll} from "../../Utilities/clearAll";
export const Products = () => {
  const { state } = useFilter();
  const {
    sorting,
    priceRange,
    category,
    ratings,
    brand,
    includeOutOfStock,
    fastDelivery,
    clearAll
  } = state;
  const {roadster,nautica,puma,adidas,hAndm,colorbar,klotthe,talesAndStories,dove}=brand;
  const { loader, data } = useAxios();
  const sortedByPrice = getSortedProducts(data, sorting);
  const sortedByPriceRange = getPriceRange(sortedByPrice, priceRange);
  const sortedByRatings = getRating(sortedByPriceRange, ratings);
  const sortedByBrand = getBrand(sortedByRatings, roadster,nautica,puma,adidas,hAndm,colorbar,klotthe,talesAndStories,dove);
  const sortedByIncludeOutOfStock = getIncludeOutOfStock(
    sortedByBrand,
    includeOutOfStock
  );
  const sortedByFastDelivery = getFastDelivery(
    sortedByIncludeOutOfStock,
    fastDelivery
  );
  const dataClear=getClearAll(sortedByFastDelivery,clearAll)
  const sortedData = getCategory(dataClear, category);

  return (
    <div>
      <Header />
      <h2 className="center-text">All Products</h2>
      <div className="grid-container">
        <Sidebar />
        <div className="ecom-main">
          {loader && <h1>Loading....</h1>}
          {sortedData.map((product) => (
            <ProductDisplay key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
