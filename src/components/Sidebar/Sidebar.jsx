import "./Sidebar.css";
import { useFilter } from '../../Context/filter-context';

export const Sidebar = () => {
  const {state,dispatch}=useFilter();
  return (
    <div>
     <span id="ecom-hamburger" className="material-icons">
        menu
        </span>
      <aside className="ecom-sidebar">
        <div className="space-between">
          <h3>Filters</h3>
          <button className="btn clear-btn">
            CLEAR
          </button>
        </div>
        <h3 className="mt-2 mb-1">Sort by price</h3>
        <label className="mr-half">
          <input className="mr-half" type="radio" name="sort-by-price" onChange={()=>dispatch({type:"HIGH_TO_LOW"})}  />
          High To Low
        </label>
        <label>
          <input className="mr-half" type="radio" name="sort-by-price" onChange={()=>dispatch({type:"LOW_TO_HIGH"})}/>
          Low To High
        </label>
        <h3 className="mt-1 mb-1">Price range</h3>
        <div className="slider">
          <input value={state.priceRange} type="range" onChange={(e)=>dispatch({type:"PRICE_RANGE",value:e.target.value})} min="0" max="5000" step="any"/>
          <datalist id="tickmarks" className="space-between">
            <option value="0" label="min 0"></option>
            <option value="1000"></option>
            <option value="2000"></option>
            <option value="3000"></option>
            <option value="4000"></option>
            <option value="5000" label="Max 5k"></option>
          </datalist>
          <h3 className="mb-1 mt-1">Category</h3>
          <div>
            <label >
              <input className="mr-half mb-half" type="checkbox" />
              Mens Clothing
            </label>
          </div>

          <label>
            <input className="mr-half" type="checkbox" />
            Women Clothing
          </label>
          <h3 className="mt-1 mb-1">Rating</h3>
          <div>
            <label>
              <input className="mr-half mb-half" type="radio" name="rating" />4
              Stars & above
            </label>
          </div>
          <div>
            <label>
              <input className="mr-half" type="radio" name="rating" />3 Stars &
              above
            </label>
          </div>
          <h3 className="mt-1 mb-1">Brand</h3>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Apple
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Samsung
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Vivo
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Oppo
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Redmi
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Fila
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Addidas
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Nike
            </label>
          </div>
          <div>
            <label>
              <input
                className="mr-half mb-half"
                type="checkbox"
                name="rating"
              />
              Puma
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
};
