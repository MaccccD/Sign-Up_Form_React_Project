import React, { useState } from 'react';

function ToDoList() {
    //setting up the states :
    const [tasks, setTasks] = useState("");
    const [tasksHolder, setTasksHolder] = useState([]);
   

    function AddTasks(){
      //add tasks typed into the holder
      const newTask = { // changed to this to object destructruring . Kinda like an Enum but in js
        id: Date.now(),
        text: tasks,
        completed: false
      }
      setTasksHolder([...tasksHolder, newTask]); // in react, we dont use push like in pure js , we add something to an array in this way by using the spread operator
      //also you need to add the tasks into the task holder by doing it like above. not just a'task' with no holder like i had before: "...task"(that's wrong
      //tasks.value = "";
      setTasks(""); // clear tasks. Need to add the value prop so that it connects the tasks to this as well
      console.log("a new task has been added to the tasks holder");
      console.log(tasksHolder);
      if(tasksHolder != null){
        alert("Please add task first !");
        return;
      }
    }

    const removeTasks = (itemToRemove)=> {
      if(tasksHolder.length === 0){ // instead of using includes , you need to check if the holder is emepty first
         alert("No tasks have been added yet so there is nothing to delete");
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
    };

    const ToggleTaskCompletion = (taskChecked) =>{ // asked for help but the reason why it wasn't working was bc i was cllaing the toggle fucntion isntead of passing the bollean value in the "checked" propertyy
     const updatedTasks = tasksHolder.map((task)=>{
      if(task.id === taskChecked){
        return {...task, completed: !task.completed}
      }
      return task;
     });
     setTasksHolder(updatedTasks);
    }
    
   
  return (
    <div>
      <h1>Welcome to your Daily To-Do List Task Planner.</h1>
      <p>In here, you'll be able to add tasks that you need to complete and tick them off when they are complete.</p>
      <br/>
      <input type='text' placeholder='Enter your tasks' value={tasks} onChange={(t)=> setTasks(t.target.value)} onKeyDown={(t)=> t.key === 'Enter' && AddTasks} /> 
      <br/>
      <button onClick={AddTasks} className='tasks'>Add Tasks</button>
      <br/>
      <button onClick={removeTasks} className='tasks'>Delete Task</button>
     <ul>
      <h1>Your Tasks: ({tasksHolder.length}):</h1>
      <br/>
      {tasksHolder.map((task)=>{
        return (
        <li key={task.id}>
          {task.text}
           <input type='checkbox' 
           className='checkbox' 
           checked= {task.completed} 
           onChange={()=>ToggleTaskCompletion(task.id)}/>
        </li>
        );
      })}
     </ul>
    </div>
  )
}

export default ToDoList;
