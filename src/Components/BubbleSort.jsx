import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function BubbleSort() {
    //setting up the states :
    const [numbersholder, setNumbersHolder] = useState([]);
    const [swap, setSwap] = useState(false);

    const nav = useNavigate();


    let numbers = ["34", 
      "45", 
      "65", 
      "78", 
      "88", 
      "34", 
      "67", 
      "99", 
      "75", 
      "78"];

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
      setNumbersHolder(...numbersholder, numbers);
      alert("Numbers of the bubble sort now showing!");
      console.log(" numbers have been added into the holder");
     
     };
     function ArrangeNumbers(){ // ask for help with this !
      numbers.sort((a, b)=> (b, a));
      alert("Numbers have now be sorted in ascending order");
      console.log("numbers have been sorted in ascending order");
     };

     function SwapNumbers(){
      numbers.map((num)=>{
       num[index0], num[index1] = num[index1], num[index0];
       num[index1], num[index2] = num[index2], num[index1];
       num[index2], num[index3] = num[index3], num[index2];
       console.log("the numbers are being swapped !");
      })
     }

   
  return (
    <div>
    <h1 class="heading">Dumzi's Entry-level Algorithms Practice Exercises(with React)</h1>
    <p class="Text">Bubble Sort Visualizer:
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
