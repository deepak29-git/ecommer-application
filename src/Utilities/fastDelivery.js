export const getFastDelivery = (data,fastDelivery)=>{
    if(fastDelivery)
    return [...data].filter(product=>product.fastDelivery)
    else
    return data
}