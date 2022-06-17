import { useNavigate } from "react-router-dom";
import { useFilter } from "../../Context/filter-context";
export const SearchBar = () => {
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    navigate("/products");
    dispatch({ type: "SEARCH", value: e.target.value });
  };

  const debounce = (callback, delay) => {
    let timer;
    return function (e) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(e);
      }, delay);
    };
  };
  const getDebounce = debounce(onChangeHandler, 800);
  return (
    <div className="input-parent">
      <input
        className="ecom-input standard-input"
        type="search"
        onChange={getDebounce}
        placeholder="Search for products, brands and more"
      />
      <span id="ecom-search" className="material-icons">
        search
      </span>
    </div>
  );
};
