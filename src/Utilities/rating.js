export const getRating=(data,rating)=>{
    if(rating===3){
        return [...data].filter(product=>product.rating >= 3)
    }else if(rating===4){
        return [...data].filter(product=>product.rating >= 4)
    }else{
        return [...data]
    }
}