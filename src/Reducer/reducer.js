
export const reducer=(state,action)=>{
    switch(action.type){
        case "HIGH_TO_LOW" :
            return {...state,sorting:"HIGH_TO_LOW"}
         case "LOW_TO_HIGH" :
             return {...state,sorting:"LOW_TO_HIGH"}  
        case "PRICE_RANGE" :
            return {...state,priceRange:action.value}
        default:
            return state
    }
}


