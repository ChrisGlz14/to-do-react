import React from "react";
import '../styles/taskform.css'

function TaskForm() {
  return (
    <form action="" className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Escriba su tarea"
      />
      <button className="task-button">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
