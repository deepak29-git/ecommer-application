
export const reducer=(state,action)=>{
    switch(action.type){
        case "LOAD_DATA" :
        return {...state,loading:true}
        case "LOAD_DATA_SUCCESS":
            return {...state,loading:false,products:action.payload}
        case "HIGH_TO_LOW" :
            return {...state,sorting:"HIGH_TO_LOW"}
         case "LOW_TO_HIGH" :
             return {...state,sorting:"LOW_TO_HIGH"}   
        default:
            return state
    }
}


