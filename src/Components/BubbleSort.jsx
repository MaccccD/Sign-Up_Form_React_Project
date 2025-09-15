import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function BubbleSort() {
    //setting up the states :
    const [numbersholder, setNumbersHolder] = useState([]);
    const [swap, setSwap] = useState(false);

    const nav = useNavigate();

    let numbers = [34,
      45, 
      65, 
      78, 
      88, 
      34, 
      67, 
      99, 
      75, 
      78];

      let index0 = 0;
      let index1 = 1;
      let index2 = 2;
      let index3 = 3;
      let index4 = 4;
      let index5 = 5;
      let index6 = 6;
      let index7 = 7;
      let index8 = 8;
      let index9= 9;


     function storeNumbers (){
      setNumbersHolder([...numbers]); //after code review: changed from '...numbersholder,number' to just '..number' to create copy of the numbers of the array.
      alert("Numbers of the bubble sort now showing!");
      console.log("numbers have been added into the holder"); // this works
     
     // console.log(numbersholder);
     
     };
     function ArrangeNumbers(){ // ask for help with this !
     const sortedNumbers = setNumbersHolder([...numbersholder]); //access numbers already in the holder and sort those
      numbersholder.sort((a, b)=> (a - b));
      setNumbersHolder(sortedNumbers); //update the number based on the sort!
      alert("Numbers have now be sorted in ascending order");
      console.log("numbers have been sorted in ascending order"); // i do this in the console but te number's aren't being re arranged as they should visually
     };

     function SwapNumbers(){
       
      numbers.map((num)=>{
        
        return(
       num[index0], num[index1] = num[index1], num[index0],
       num[index1], num[index2] = num[index2], num[index1],
       num[index2], num[index3] = num[index3], num[index2],
       num[index3], num[index4] = num[index4], num[index3],
       num[index4], num[index5] = num[index5], num[index4],
       num[index5], num[index6] = num[index6], num[index5],
       num[index6], num[index7] = num[index7], num[index6],
       num[index7], num[index8] = num[index8], num[index7],
       num[index8], num[index9] = num[index9], num[index8],
       console.log("the numbers are being swapped !")); // this isn't working and i'm not sure why
      });
     }

   
  return (
    <div>
    <h1 className="heading">Dumzi's Entry-level Algorithms Practice Exercises(with React)</h1>
    <p className="Text">Bubble Sort Visualizer:
     building a visual bubble sort that shows how elements "bubble up" in their correct positions. </p> 
      <div>
       <h1>Bubble Sort Numbers:</h1>
       {numbersholder.map((number, index)=>{
        return(
          <li key={index}>
           {number}
          </li>
        );
       })}
    </div>
     <br/><br/>
     <button onClick={storeNumbers} className='tasks'>Display Numbers</button>
    <br/>
    <button onClick={ArrangeNumbers} className='tasks'>Sort Numbers</button>
    <br/>
    <button onClick={SwapNumbers}className='tasks'>Swap Numbers</button>
    </div>
    
  )
}

export default BubbleSort;
