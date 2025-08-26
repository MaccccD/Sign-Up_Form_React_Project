import React, { useState } from 'react'

function BubbleSort() {
    //setting up the states :
    const [numbersholder, setNumbersHolder] = useState([]);
    const [sort, setSorted] = useState(false);
    const [swap, setSwap] = useState(false);


     function displayNumbers (){
      let numbers = ["34, 45, 65, 78, 88, 34, 67, 99, 75, 78"];
      setNumbersHolder(...numbersholder, numbers);
      alert("Numbers of the bubble sortbare now showing!");
      console.log(" numbers have been added into the holder");
      
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
    </div>
  )
}

export default BubbleSort;
