import React, { useState } from 'react';

function ToDoList() {
    //setting up the states :
    const [tasks, setTasks] = useState("");
    const [tasksHolder, setTasksHolder] = useState([]);
    const [complete, setComplete] = useState(false);

    function AddTasks(){
      //add tasks typed into the holder
      setTasksHolder(...tasks); // in react, we dont use push like in pur js , we add something to an array in this way by using the spread operator
      setComplete(false);
      console.log("a new task has been added to the tasks holder");
      console.log(tasksHolder);
    }
    
   
  return (
    <div>
      <input type='text' placeholder='Enter your tasks' onChange={(t)=> setTasks(t.target.value)} />
      <br/><br/>
      <button onClick={AddTasks}>Add Tasks</button>
      <br/>
     <ul>
      {tasksHolder.map((task, index)=>{
        return (
        <li key={index}>
          {task}
        </li>
        )
      })}
     </ul>
    </div>
  )
}

export default ToDoList;
