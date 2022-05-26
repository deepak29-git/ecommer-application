// import axios from "axios"
// import { getToken } from "../Utilities/add-to-wishlist"

// export const createOrderApi=async()=>{
//     try{
//         const response=await axios({
//             method:"POST",
//             url:"https://api.razorpay.com/v1/orders",
//             data:{
//                 amount: 500,
//                 currency: "INR",
//                 receipt: "receipt_011",
//                 // "partial_payment": true,
//                 // "first_payment_min_amount": 230
//             },
//             headers:{authoriazation:getToken()}
//         })
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }