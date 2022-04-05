import "./Sidebar.css";
import { useFilter } from "../../Context/filter-context";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const { state, dispatch } = useFilter();

  const [display, setDisplay] = useState("");

  const hamburgerHandler = () => {
    if (display === "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };
  return (
    <div>
      <span
        onClick={hamburgerHandler}
        id="ecom-hamburger"
        className="material-icons"
      >
        menu
      </span>
      {
        <aside style={{ display: display }} className="ecom-sidebar">
          <div className="space-between">
            <h3>Filters</h3>
            <button
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
              className="btn primary clear-btn"
            >
              CLEAR ALL
            </button>
          </div>
          <h3 className="mt-2 mb-1">Sort by price</h3>
          <label className="mr-half">
            <input
              className="mr-half"
              type="radio"
              name="sort-by-price"
              checked={state.sorting === "HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            High To Low
          </label>
          <label>
            <input
              className="mr-half"
              type="radio"
              checked={state.sorting === "LOW_TO_HIGH"}
              name="sort-by-price"
              onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            Low To High
          </label>
          <h3 className="mt-1 mb-1">Price range</h3>
          <div className="slider">
            <input
              value={state.priceRange}
              type="range"
              onChange={(e) =>
                dispatch({ type: "PRICE_RANGE", value: e.target.value })
              }
              min="0"
              max="5000"
              step="any"
            />
            <datalist id="tickmarks" className="space-between">
              <option value="0" label="min 0"></option>
              <option value="1000"></option>
              <option value="2000"></option>
              <option value="3000"></option>
              <option value="4000"></option>
              <option value="5000" label="Max 5k"></option>
            </datalist>
            <h3 className="mt-1 mb-1">Availability</h3>
            <label className="mr-half">
              <input
                checked={!state.includeOutOfStock}
                className="mr-half"
                type="checkbox"
                onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
              />
              Include out of stock
            </label>
            <label>
              <input
                className="mr-half"
                type="checkbox"
                checked={state.fastDelivery}
                onChange={() => dispatch({ type: "FAST_DELIVERY" })}
              />
              Fast Delivery
            </label>
            <h3 className="mb-1 mt-1">Category</h3>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="category"
                  checked={state.category.men}
                  onChange={() => dispatch({ type: "MEN" })}
                />
                Men
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="category"
                  checked={state.category.women}
                  onChange={() => dispatch({ type: "WOMEN" })}
                />
                Women
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  checked={state.category.kids}
                  name="category"
                  onChange={() => dispatch({ type: "KIDS" })}
                />
                Kids
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  checked={state.category.homeAndliving}
                  name="category"
                  onChange={() => dispatch({ type: "HOME & LIVING" })}
                />
                Home & Living
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="category"
                  checked={state.category.beauty}
                  onChange={() => dispatch({ type: "BEAUTY" })}
                />
                Beauty
              </label>
            </div>
            <h3 className="mt-1 mb-1">Rating</h3>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="radio"
                  name="rating"
                  checked={state.ratings === 4}
                  onChange={() => dispatch({ type: "four & above", rating: 4 })}
                />
                4 Stars & above
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="radio"
                  checked={state.ratings === 3}
                  name="rating"
                  onChange={() =>
                    dispatch({ type: "three & above", rating: 3 })
                  }
                />
                3 Stars & above
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="radio"
                  checked={state.ratings === 2}
                  name="rating"
                  onChange={() => dispatch({ type: "two & above", rating: 2 })}
                />
                2 Stars & above
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="radio"
                  checked={state.ratings === 1}
                  name="rating"
                  onChange={() => dispatch({ type: "one & above", rating: 1 })}
                />
                1 Stars & above
              </label>
            </div>
            <h3 className="mt-1 mb-1">Brand</h3>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.roadster}
                  onChange={() => dispatch({ type: "ROADSTER" })}
                />
                Roadster
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.nautica}
                  onChange={() => dispatch({ type: "NAUTICA" })}
                />
                Nautica
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.puma}
                  onChange={() => dispatch({ type: "PUMA" })}
                />
                Puma
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  checked={state.brand.adidas}
                  name="brand"
                  onChange={() => dispatch({ type: "ADIDAS" })}
                />
                ADIDAS
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  checked={state.brand.hAndm}
                  name="brand"
                  onChange={() => dispatch({ type: "H&M" })}
                />
                H&M
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.colorbar}
                  onChange={() => dispatch({ type: "COLORBAR" })}
                />
                Colorbar
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.klotthe}
                  onChange={() => dispatch({ type: "KLOTTHE" })}
                />
                KLOTTHE
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  name="brand"
                  checked={state.brand.talesAndStories}
                  onChange={() => dispatch({ type: "TALES & STORIES" })}
                />
                TALES & STORIES
              </label>
            </div>
            <div>
              <label>
                <input
                  className="mr-half mb-half"
                  type="checkbox"
                  checked={state.brand.dove}
                  name="brand"
                  onChange={() => dispatch({ type: "DOVE" })}
                />
                Dove
              </label>
            </div>
          </div>
        </aside>
      }
    </div>
  );
};
