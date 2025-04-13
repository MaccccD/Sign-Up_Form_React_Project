import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/FormContext';
import { useNavigate } from 'react-router-dom';

function PersonalDetails() {
    // usage  of context:
    const {privateDetails} = useContext(FormContext);
    // usage of navigate
    const navigate = useNavigate();
    //Personal Details useState Variables:
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [IdNumber, setIDNumber] = useState("");
    const [DOB, setDOB] = useState("");


    function HandlePersonalDetails(event){
         event.preventDefault(); // for some reason this does not work and so if the person puts oin the wrong details, it reloads nonetheless.
         if(name && surname && IdNumber && DOB .trim()){
        if( privateDetails(name, surname, IdNumber, DOB)){
            navigate("/Address");
        }
        else{
         alert ("Wrong details!!!!");
        }

         }
    }
    
  return (
    //first step of the form is the personal details:
    <div>
      <h1>Heyyyy, Welcome to our Gen Zs Dating Site!!!</h1>

       <form onSubmit={HandlePersonalDetails}>
        <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required/>
        <input type='text' placeholder='Enter Surname' onChange={(e)=> setSurname(e.target.value)} required/>
        <input type='text' placeholder='Enter ID Number' onChange={(e)=> setIDNumber(e.target.value)} required/>
        <input type='text' placeholder='Enter Date Of Birth' onChange={(e)=> setDOB(e.target.value)} required/>
        <button style={{backgroundColor: 'green', borderRadius: 16, width: 100, height: 50}}>Next</button>
      </form>
    </div>
  )
}

export default PersonalDetails;
