
const getSortedProducts=(data,sorting)=>{
    if(sorting==="HIGH_TO_LOW"){
        return [...data].sort((a,b)=>b.price-a.price)

    }
    else if (sorting==="LOW_TO_HIGH"){
        return [...data].sort((a,b)=>a.price-b.price)
    }
    
    return [...data]
}

export {getSortedProducts}

