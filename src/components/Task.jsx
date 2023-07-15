import React from "react";
import "../styles/task.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Task({ id, text, completed, completedTask, deleteTask }) {
  return (
    <>
      <div
        className={completed ? "container-task completed" : "container-task"}
      >
        <div className="container-text" onClick={() => completedTask(id)}>
          {text}
        </div>

        <div className="container-task-icons" onClick={() => deleteTask(id)}>
          <IoCheckmarkCircleOutline className="icon-task" />
        </div>
      </div>
    </>
  );
}

export default Task;
