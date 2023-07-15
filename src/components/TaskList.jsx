import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from './Task'
import "../styles/tasklist.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);


  const addTask = task => {
    console.log(task)
    if (task.text.trim()) {
        task.text = task.text.trim();
        const tasksUpdate = [task, ...tasks];
        setTasks(tasksUpdate);
    }
  }

  const deleteTask = id => {
    const tasksUpdate = tasks.filter( task => task.id !== id);  
    setTasks(tasksUpdate);
  }
  
  const completedTask = id => {
    const tasksUpdate = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdate);
  }

  return (
    <>

      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => 

          <Task

            key={task.id} 
            id={task.id} 
            text = {task.text}
            completed = {task.completed}
            completedTask={completedTask}
            deleteTask={deleteTask}

          />

        )}
      </div>

    </>
  );
}

export default TaskList;
