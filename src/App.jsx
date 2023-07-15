import "./App.css";
import Task from "./components/Task"; 
import TaskList from "./components/TaskList";

function App() {
  return (
      <div className="app-task">
        <div className="task-list">
          <h1>Lista de Tareas</h1>
          <TaskList />
        </div>
      </div>
  );
}

export default App;
