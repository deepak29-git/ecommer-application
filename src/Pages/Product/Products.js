import './Products.css'
import { useAxios } from "../../Api-data/useAxios";
import { ProductDisplay } from "./ProductDisplay";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {getSortedProducts} from '../../Utilities/sort';
import { useFilter } from '../../Context/filter-context';
import {loadProducts} from '../../Api-data/useAxios'
import {useEffect} from 'react'

export const Products = () => {
  const {state,dispatch}=useFilter()
  const {sorting,products,loading} =state
 
const sortedData=getSortedProducts(products,sorting)

  useEffect(()=>{
    loadProducts(dispatch)
  },[])

  return (
    <div>
      <Header />
      <h2 className="center-text">All Products</h2>
      <div className="grid-container" >
        <Sidebar />
        <div className="ecom-main">
         {loading && <h1>Loading....</h1>} 
        { sortedData.map((product) => (
          <ProductDisplay key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
