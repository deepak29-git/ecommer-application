import { useState } from "react";
import { v4 as uuid } from "uuid";
import "../Address/Address.css";
import { AddressData } from "../AddressData/AddressData";
import { EditAddress } from "../EditAddress/EditAddress";
import { PriceDetails } from "../PriceDetails/PriceDetails";
export const Address = () => {
  const [addressSelector, setAddressSelector] = useState("");
  const [showEdit,setShowEdit]=useState(false)
  const intialValue = {
    id: uuid(),
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  };

  const dummyAddressObj = {
    id: uuid(),
    name: "deepak",
    mobile: 8269867241,
    pincode: 456006,
    address: "Ahiliya Bai Marg",
    city: "Ujjain",
    state: "Madhya Pradesh",
  };
  const [dummyAddress, setDummyAddress] = useState(intialValue);
  const [blur,setBlur]=useState("blur(3px)")
  const [printAddress, setPrintAddress] = useState([]);
  const [showAddress, setShowAddress] = useState(true);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDummyAddress({ ...dummyAddress, [name]: value });
  };

  const updateHandler=(e)=>{
    e.preventDefault();
    const updatedData = printAddress.map((userInfo) =>
        userInfo.id === dummyAddress.id ? dummyAddress : userInfo
      );
      setPrintAddress(updatedData);
      setShowEdit(false)
      setBlur("blur(0px)")
  }
  const saveAddressHandler = (e) => {
    e.preventDefault();
    setShowAddress(false);
    setBlur("blur(0px)")
      setPrintAddress((printAddress) => [...printAddress, dummyAddress]);
  };

  const addDummyAddressHandler = (e) => {
    e.preventDefault();
    setDummyAddress(dummyAddressObj);
  };

  const removeAddressHandler=(id)=>{
    const removedAddress=printAddress.filter(address=>address.id!==id)
    setPrintAddress(removedAddress)
  }
  const editBtnHandler = (userDetails) => {
    setShowEdit(true);
    setDummyAddress(userDetails);
  };
  return (
    <>
        {showEdit&&<EditAddress setBlur={setBlur} updateHandler={updateHandler} dummyAddress={dummyAddress}  onChangeHandler={onChangeHandler} setShowEdit={setShowEdit}/>}
        {showAddress && (
          <AddressData
            dummyAddress={dummyAddress}
            onChangeHandler={onChangeHandler}
            saveAddressHandler={saveAddressHandler}
            addDummyAddressHandler={addDummyAddressHandler}
            setShowAddress={setShowAddress}
            setBlur={setBlur}
            
          />
        )}
        <div className="mt-6">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setShowAddress(true)
                setDummyAddress(intialValue)
                setShowEdit(false)
                setBlur("blur(3px)")
              }}
            >
              Add new address
            </button>
          </div>
      <div className="parent-container" style={{filter:blur}}>
        <div>
          {printAddress.map((userDetails) => {
            const { id, name, mobile, address, city, state, pincode } =
              userDetails;
            return (
              <div key={id} className="address-box">
                <div  className="address-details">
                  <input
                    name="select-address"
                    type="radio"
                    onChange={(e) => setAddressSelector(e.target.checked)}
                  />
                  <div>
                    <h4>
                      {name} <span>{mobile}</span>
                    </h4>
                    <p className="ptb-half">
                      {address}{" "}
                      <span>
                        {" "}
                        {city} {state}-{pincode}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    editBtnHandler(userDetails)
                    setShowAddress(false)
                    setBlur("blur(3px)")
                  }}
                  className="btn btn-primary mr-1"
                >
                  Edit
                </button>
                <button onClick={()=>removeAddressHandler(id)} className="btn btn-outline-secondary">Remove</button>
              </div>
            );
          })}
        </div>
        <PriceDetails printAddress={printAddress} addressSelector={addressSelector} />
      </div>
    </>
  );
};
