import React, { useState } from 'react';

function ToDoList() {
    //setting up the states :
    const [tasks, setTasks] = useState("");
    const [tasksHolder, setTasksHolder] = useState([]);
    const [completed, setCompleted] = useState(false);

    function AddTasks(){
      //add tasks typed into the holder
      setTasksHolder([...tasksHolder, tasks]); // in react, we dont use push like in pure js , we add something to an array in this way by using the spread operator
      //also you need to add the tasks into the task holder by doing it like above. not just a'task' with no holder like i had before: "...task"(that's wrong)
      setCompleted(false);
      console.log("a new task has been added to the tasks holder");
      console.log(tasksHolder);
    }
    
   
  return (
    <div>
      <h1>Welcome to your Daily To-Do List Task Planner.</h1>
      <p>In here, you'll be able to add tasks that you need to complete and tick them off when they are complete.</p>
      <br/>
      <input type='text' placeholder='Enter your tasks' onChange={(t)=> setTasks(t.target.value)} />
      <br/>
      <button onClick={AddTasks} className='tasks'>Add Tasks</button>
      <br/>
     <ul>
      {tasksHolder.map((task, index)=>{
        return (
        <li key={index}>
          {task}
          <input type='checkbox' className='checkbox' checked = {task.completed}/>
        </li>
        );
       
      })}
     </ul>
    </div>
  )
}

export default ToDoList;
