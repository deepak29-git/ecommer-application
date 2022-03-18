export const getIncludeOutOfStock = (data,inStock)=>{
    if(inStock)
    return [...data].filter(product=>product.inStock)
    else
    return data
}