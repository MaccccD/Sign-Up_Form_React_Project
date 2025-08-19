import React, { createContext, useState } from 'react';

 export const FormContext = createContext();


 function FormContextProvider({children}) {

    const [User, setUser] = useState("");
    const [LastName, setLastName] = useState("");
    const [IdNumber, setIdNumber] = useState("");
    const [password, setPassword] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState(0);
    const [authenticate, SetAuthenticate] = useState(false);

    function privateDetails(name, surname, IdNumber, password){
    setUser(name);
    setLastName(surname);
    setIdNumber(IdNumber);
    setPassword(password);
    SetAuthenticate(true);
    return true;
    }

    function privateAddress(houseNumber, streetName, City, postCode){
    setUserAddress(houseNumber);
    setStreetName(streetName);
    setCity(City);
    setPostCode(postCode);
    return true;
    }

    function Confirmation(){
     SetAuthenticate(true);
    }


   return (
   <FormContext.Provider value={{User,password, IdNumber, LastName, authenticate,userAddress,streetName, city, postCode, privateDetails, privateAddress, Confirmation}}>
    {children}
   </FormContext.Provider>
   )
}

export default FormContextProvider;
