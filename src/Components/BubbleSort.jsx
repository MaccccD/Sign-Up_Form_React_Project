import React, { useState } from 'react'

function BubbleSort() {
    //setting up the states :
    const [numbersholder, setNumbersHolder] = useState([]);
    const [sort, setSorted] = useState(false);
    const [swap, setSwap] = useState(false);


    let numbers = ["34, 45, 65, 78, 88, 34, 67, 99, 75, 78"];


     function displayNumbers (){
      setNumbersHolder(...numbersholder, numbers);
      alert("Numbers of the bubble sortbare now showing!");
      console.log(" numbers have been added into the holder");
      
     }

     function ArrangeNumbers(){
      numbers.sort((a, b)=> (b, a));
      console.log("numbers have been sorted in ascending order");
     }
  return (
    <div>
    <h1 class="heading">Dumzi's Entry-level Algorithms Practice Exercises(with React)</h1>
    <p class="Text">Bubble Sort Visualizer:
     building a visual bubble sort that shows how elements "bubble up" in their correct positions. </p>  
     <br/><br/>
     <button onClick={displayNumbers}>Display Numbers</button>
      <div>
       <h1>Bubble Sort Numbers:</h1>
       {numbersholder.map((number, index)=>{
        return(
          <span key={index}>{number}</span>
        );
       })}
    </div>
    <br/>
    <button onClick={ArrangeNumbers}>Sort Numbers</button>
    </div>
  )
}

export default BubbleSort;
