import React, { createContext, useState } from 'react';

 export const FormContext = createContext();


 function FormContextProvider({children}) {

    const [User, setUser] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [authenticate, SetAuthenticate] = useState(false);

    function privateDetails(name, surname, IdNumber, DOB){
      if(name && surname && IdNumber && DOB === ""){
        setUser(name, surname, IdNumber, DOB);
        SetAuthenticate(true);
        return true;
      }
      else{
        return false;
      }
    }

    function privateAddress(houseNumber, streetName, City, postCode){
     if(houseNumber === "4401" && streetName === "SherrySpinner" && City === "Alberton" && postCode === "1459"){
        setUserAddress(houseNumber, streetName, City, postCode);
        SetAuthenticate(true);
        return true;
     }
     else{
        return false;
     }
    }

    function Confirmation(){
     SetAuthenticate(true);
    }


   return (
   <FormContext.Provider value={{User, authenticate,userAddress, privateDetails, privateAddress, Confirmation}}>
    {children}
   </FormContext.Provider>
   )
}

export default FormContextProvider;
