import React,{useState} from "react";
import '../styles/taskform.css'
import {v4 as uuidv4} from 'uuid'  
import Task from "./Task";

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }
  
  const handleShip = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);

  }

  

  return (
    <form
    className="task-form"
    onSubmit={handleShip}>
      <input
        className="task-input"
        type="text"
        placeholder="Escriba su tarea"
        onChange={handleChange}
      />
      <button className="task-button">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;
