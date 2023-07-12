import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <div className="app-task">
        <div className="task-list">
          <h1>Lista de Tareas</h1>
          <h2 className="my-tasks"></h2>
          <TaskForm />
          <Task text="Aprender react" />
        </div>
      </div>
    </>
  );
}

export default App;
