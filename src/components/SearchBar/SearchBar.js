import { useNavigate } from "react-router-dom"
import { useEffect,useRef } from "react"
import { useFilter } from "../../Context/filter-context"
export const SearchBar=()=>{
  const {dispatch,state:{search}}=useFilter()
  const navigate=useNavigate()
  const inputRef=useRef("")
useEffect(()=>{
  if(search){   
    navigate("/products")
    inputRef.current.focus()
  }
},[search])
    return(
        <div
          className="input-parent"
        >
          <input
            className="ecom-input standard-input"
            type="search"
            value={search}
            ref={inputRef}
            onChange={(e) => dispatch({ type: "SEARCH", value: e.target.value })}
            placeholder="Search for products, brands and more"
          />
          <span id="ecom-search" className="material-icons">
            search
          </span>
        </div>
    )
}