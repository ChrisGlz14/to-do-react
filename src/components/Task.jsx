import React from "react";
import "../styles/task.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Task({ text, completed }) {
  return (
    <>
      <div className={completed ? 'container-task completed' : 'container-task'}>
        <div className="container-text">{text}</div>

        <div className="container-task-icons">
          <IoCheckmarkCircleOutline className="icon-task"/>
        </div>
      </div>
    </>
  );
}

export default Task;
