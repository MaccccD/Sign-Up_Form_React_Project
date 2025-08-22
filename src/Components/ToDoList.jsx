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
      setTasks(""); // clear tasks
      setCompleted(false);
      console.log("a new task has been added to the tasks holder");
      console.log(tasksHolder);
    }


    const removeTasks = (itemToRemove)=> {
      if(tasksHolder.length === 0){ // instead of using includes , you need to check if the holder is emepty first
         alert("No tasks have been added yet so there is nothing to delete");
         setCompleted(false);
         return;
      }
      let updatedTasks = tasksHolder.filter(item => item !== itemToRemove); // to remove something n an anraay on react , we use "filter" instea dof normal js methods such as "pop" or "slice"
         setTasksHolder(updatedTasks);
         console.log(updatedTasks);
         alert("A task has been deleted from the list");
         console.log("the recent tasks has been deleted from the list"); 

        if(!tasksHolder.includes(itemToRemove)){
        alert("this item has been removed alreadyy");
        return;
      }
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
      <br/>
      <button onClick={removeTasks} className='tasks'>Delete Task</button>
     <ul>
      {tasksHolder.map((task, index)=>{
        return (
        <li key={index}>
          {task}
          <input type='checkbox' className='checkbox'/>
        </li>
        );
       
      })}
     </ul>
    </div>
  )
}

export default ToDoList;
