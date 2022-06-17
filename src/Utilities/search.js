export const getSearch=(data,search)=>{
    if(search){
        return data.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()) || product.categoryName.toLowerCase().includes(search.toLowerCase()))
    }
    return data
}