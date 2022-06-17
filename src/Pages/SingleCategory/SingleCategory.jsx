import { useParams } from "react-router-dom";
import { useAxios } from "../../Api-data/useAxios";
import { Loader } from "../../components/Loader/Loader";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ProductDisplay } from "../Product/ProductDisplay";
import { Header } from "../../components/Header/Header";
export const SingleCategory = () => {
  const { categoryName } = useParams();
  const { data } = useAxios();
  const findCategory = data.filter(
    (item) => item.categoryName === categoryName
  );

  return (
    <div>
      <h2 className="center-text">{categoryName}</h2>

      <div className="ecom-main">
        <Loader />
        {findCategory.map((product) => (
          <ProductDisplay key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
