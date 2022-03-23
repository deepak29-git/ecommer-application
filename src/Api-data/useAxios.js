import {
  useState,
  useEffect
} from "react";
import axios from "axios";
const api = "/api/products";

export const useAxios = () => {
  const [data, setData] = useState([]);
  const [loader,setLoader]=useState(false);
  useEffect(() => {
    (async () => {
      try{
        setLoader(true);
        const {data} = await axios.get(api);
        setLoader(false);
        setData(data.products);
      }catch(error){
        console.log(error)
      }
    })();
  }, []);
  return {data,loader,setLoader}
};


