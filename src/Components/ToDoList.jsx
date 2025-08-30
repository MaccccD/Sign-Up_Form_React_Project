import React, { useState, useNavigate } from 'react';

function ToDoList() {
    //setting up the states :
    const [tasks, setTasks] = useState("");
    const [tasksHolder, setTasksHolder] = useState([]);
   
    const nav= useNavigate();

    function AddTasks(){
      //checking if a task has been added to the holder before showing it:
      if(tasksHolder != null){
        alert("Please add task first!");
        return;
      }
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
      
    }
   function Navigate(){
    nav("BubbleSort");
    console.log("the next page has loaded");
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
        alert("this item has been removed alreadyyyyy");
        return;
      }
    };

    const ToggleTaskCompletion = (taskChecked) =>{ // asked for help but the reason why it wasn't working was bc i was cllaing the toggle fucntion isntead of passing the bollean value in the "checked" propertyy
     const updatedTasks = tasksHolder.map((task)=>{
      if(task.id === taskChecked){
        alert("Task has been completed");
        return {...task, completed: !task.completed} // bc initiually the completion is false so you turn it into the opposite by pitti g the exclammation to make it true.
      }
      return task;
     });
     setTasksHolder(updatedTasks); // this would be the tasks that have not yet been completed bc the task that was completed is done, leaving ones that are in-complete as ytr
    }
    
   
  return (
    <div>
      <h1>Welcome to your Daily To-Do List Task Planner.</h1>
      <p>In here, you'll be able to add tasks that you need to complete and tick them off when they are complete.</p>
      <br/>
      <input type='text' placeholder='Enter your tasks' value={tasks} onChange={(t)=> setTasks(t.target.value)} onKeyUp={(t)=> t.key === 'Enter' && AddTasks} /> 
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
     <br/>
     <button className='tasks' onClick={Navigate}>Next Challenge</button>
    </div>
  )
}

export default ToDoList;
