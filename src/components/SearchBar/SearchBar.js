export const SearchBar=()=>{
    return(
        <div
          className="input-parent"
          onChange={(e) => dispatch({ type: "SEARCH", value: e.target.value })}
        >
          <input
            className="ecom-input standard-input"
            type="search"
            placeholder="Search for products, brands and more"
          />
          <span id="ecom-search" className="material-icons">
            search
          </span>
        </div>
    )
}