import './Products.css'
import { ProductDisplay } from "./ProductDisplay";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {getSortedProducts} from '../../Utilities/sort';
import { useFilter } from '../../Context/filter-context';
import {useAxios} from '../../Api-data/useAxios'
import {getPriceRange} from '../../Utilities/priceRange'


export const Products = () => {
  const {state}=useFilter();
  const {sorting,priceRange} =state;
  const {loader,data}=useAxios();
    
  const sortedData=getPriceRange(getSortedProducts(data,sorting),priceRange)   

  return (
    <div>
      <Header />
      <h2 className="center-text">All Products</h2>
      <div className="grid-container" >
        <Sidebar />
        <div className="ecom-main">
         {loader && <h1>Loading....</h1>} 
        { sortedData.map((product) => (
          <ProductDisplay key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
