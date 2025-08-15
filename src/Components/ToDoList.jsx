import React, { useState } from 'react';

function ToDoList() {
    //setting up the states :
    const [tasks, setTasks] = useState("");
    const [tasksHolder, setTasksHolder] = useState([]);
    const [complete, setComplete] = useState(false);

  return (
    <div>
      Coming right up!!
    </div>
  )
}

export default ToDoList;
