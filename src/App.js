import "./App.css";
import PersonalDetails from './Components/PersonalDetails';
import Address from './Components/Address';
import Confirmation from './Components/Confirmation';
import BubbleSort from './Components/BubbleSort';
import Linearsearch from './Components/Linearsearch';
import WeatherDashboard from './Components/WeatherDashboard';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/PersonalDetails' element = {<PersonalDetails/>}/>
    <Route path='/Address' element = {<Address/>}/>
    <Route path='/Confirmation' element = {<Confirmation/>}/>
    <Route path='*' element = {<PersonalDetails/>}/>
    <Route path='/ToDoList' element = {<ToDoList/>}/>
    <Route path='/BubbleSort' element = {<BubbleSort/>}/>
    <Route path='/Linearsearch' element = {<Linearsearch/>}/>
    <Route path='/WeatherDashboard' element = {<WeatherDashboard/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
