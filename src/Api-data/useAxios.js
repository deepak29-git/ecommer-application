import {
  useState,
  useEffect
} from "react";
import axios from "axios";
const api = "/api/products";

export const useAxios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try{
        const {data} = await axios.get(api);
        // console.log(data.products)
        // console.log(data.products)
        setData(data.products);
      }catch(error){
        console.log(error)
      }
    })();
  }, []);
  // console.log(data)
  return {data}
};


const loadProducts=async(dispatch)=>{
    try{
      dispatch({type:"LOAD_DATA"});
      const {data} = await axios.get(api);
      dispatch({type:"LOAD_DATA_SUCCESS",payload:data.products})
    }catch(error){
      console.log(error)
    }
  }


  export {loadProducts}