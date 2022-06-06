import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useFilter } from "../../Context/filter-context";
export const SearchBar = () => {
  const {
    dispatch,
    state: { search },
  } = useFilter();
  const navigate = useNavigate();
  const inputRef = useRef("");
  useEffect(() => {
    if (search) {
      navigate("/products");
      inputRef.current.focus();
    }
  }, [search]);

  function debounce(func, delay) {
    let timer;
    return function (e) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(e);
      }, delay);
    };
  }

  const onChangeHandler = (e) => {
    dispatch({ type: "SEARCH", value: e.target.value });
  };

  const betterFunc = debounce(onChangeHandler, 300);
  return (
    <div className="input-parent">
      <input
        className="ecom-input standard-input"
        type="search"
        ref={inputRef}
        onChange={betterFunc}
        placeholder="Search for products, brands and more"
      />
      <span id="ecom-search" className="material-icons">
        search
      </span>
    </div>
  );
};
