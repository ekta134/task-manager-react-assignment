import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./App.css";

function App() {

  return (
    <div className="container">

      <h1>Task Manager</h1>

      <TaskInput />

      <TaskSummary />

      <TaskList />

    </div>
  );
}

export default App;