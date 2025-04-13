import PersonalDetails from './Components/PersonalDetails';
import Address from './Components/Address';
import Confirmation from './Components/Confirmation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/PersonalDetails' element = {<PersonalDetails/>}/>
    <Route path='/Address' element = {<Address/>}/>
    <Route path='/Confirmation' element = {<Confirmation/>}/>
    <Route path='*' element = {<PersonalDetails/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
