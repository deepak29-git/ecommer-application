// import { useState } from "react";
// import {v4 as uuid} from 'uuid';
// import '../Address/Address.css'
// export const Address = () => {
//   const [userInput, setUserInput] = useState({
//     id:uuid(),
//     name: "",
//     mobile: "",
//     pincode: "",
//     address: "",
//     city: "",
//     state: "",
//   });

//   const dummyAddress={
//     id:uuid(),
//     name: "deepak",
//     mobile: 1111111111,
//     pincode: 456006,
//     address: "Ahiliya Bai Marg",
//     city: "Ujjain",
//     state: "Madhya Pradesh",
//   }
//   const [printAddress, setPrintAddress] = useState([]);
//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserInput({ ...userInput, [name]: value });
//   };

//   const saveAddressHandler = () => {
//     setPrintAddress((printAddress) => [...printAddress, userInput]);
//   };

//   const addDummyAddressHandler=()=>{
//     setPrintAddress((printAddress) => [...printAddress, dummyAddress]);
//   }

//   return (
//     <>
//       <h3>Add New Address</h3>
//       <div>
//         <label htmlFor="">Name</label>
//         <input
//           name="name"
//           onChange={onChangeHandler}
//           type="text"
//           placeholder="Name"
//         />
//       </div>
//       <div>
//         <label htmlFor="">Mobile Number</label>
//         <input
//           name="mobile"
//           onChange={onChangeHandler}
//           type="text"
//           placeholder="10-digit mobile number"
//         />
//       </div>
//       <div>
//         <label htmlFor="">Pincode</label>
//         <input
//           name="pincode"
//           onChange={onChangeHandler}
//           type="text"
//           placeholder="Pincode"
//         />
//       </div>
//       <div>
//         <label htmlFor="">Address</label>
//         <input
//           name="address"
//           onChange={onChangeHandler}
//           type="text"
//           placeholder="Address"
//         />
//       </div>
//       <div>
//         <label htmlFor="">City/District/Town</label>
//         <input
//           name="city"
//           onChange={onChangeHandler}
//           type="text"
//           placeholder="City/District/Town"
//         />
//       </div>
//       <div>
//         <label htmlFor="">State</label>
//         <select onChange={onChangeHandler} name="state">
//           <option value="Madhya Pradesh">Madhya Pradesh</option>
//           <option value="Panjab">Panjab</option>
//           <option value="Gujrat">Gujrat</option>
//           <option value="Goa">Goa</option>
//           <option value="Haryana">Haryana</option>
//           <option value="Himachal Pradesh">Himachal Pradesh</option>
//           <option value="Chandigarh">Chandigarh</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Jammu & Kashmir">Jammu & Kashmir</option>
//           <option value="Jharkhand">Jharkhand</option>
//           <option value="Ladakh">Ladakh</option>
//           <option value="Mizoram">Mizoram</option>
//           <option value="Sikkim">Sikkim</option>
//           <option value="Uttar Pradesh">Uttar Pradesh</option>
//         </select>
//       </div>
//       <div>
//         <button onClick={saveAddressHandler}>SAVE AND DELIVER HERE</button>
//         <button onClick={addDummyAddressHandler}>ADD DUMMY ADDRESS</button>
//         <button>CANCEL</button>
//       </div>
//       {printAddress.map(({id, name, mobile, address, city, state, pincode }) => (
//         <div key={id} className="address-container">
//             <input type="radio" />
//             <div>

//           <h4>
//             {name} <span>{mobile}</span>
//           </h4>
//           <p>
//             {address}{" "}
//             <span>
//               {" "}
//               {city} {state}-{pincode}
//             </span>
//           </p>
//       </div>
//         </div>
//       ))}
//     </>
//   );
// };
