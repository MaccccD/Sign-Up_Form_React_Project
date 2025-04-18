import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/FormContext';
import { useNavigate } from 'react-router-dom';

function Address() {
    // Usage of the Address Context
    const {privateAddress} = useContext(FormContext);
    //Usage of naviagtion from adrss to confirm
    const navigate = useNavigate();

    //Personal Address useState Variables:
    const [houseNumber, setHouseNumber] = useState("");
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");


    function HandleAddressDetails(event){
         event.preventDefault();
         if(houseNumber && streetName && city && postCode .trim()){
            privateAddress(houseNumber, streetName, city, postCode);
            navigate("/Confirmation");
         }
    }


  return (
    <div>
       <h1>Hyyyy, Welcome to our Gen Zs Dating Site!!!</h1>
      <form onSubmit={HandleAddressDetails}>
      <input type='text' placeholder='Enter House Number' onChange={(d)=> setHouseNumber(d.target.value)} required/>
      <input type='text' placeholder='Enter Street Name' onChange={(d)=> setStreetName(d.target.value)} required/>
      <input type='text' placeholder='Enter City ' onChange={(d)=> setCity(d.target.value)} required/>
      <input type='text' placeholder='Enter Post Code' onChange={(d)=> setPostCode(d.target.value)} required/>
      <button style={{backgroundColor: 'green', borderRadius: 16, width: 100, height: 50}}>Confirm</button>
</form>
    </div>
  )
}

export default Address;
