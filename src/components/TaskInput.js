import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskInput() {

  const [task, setTask] = useState("");
  const { dispatch } = useTaskContext();

  const addTask = () => {

    if (!task) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: task,
        completed: false
      }
    });

    setTask("");
  };

  return (
    <div className="task-input">
     <input
  type="text"
  value={task}
  onChange={(e) => setTask(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }}
  placeholder="Enter task"
/>

      <button  onClick={addTask} disabled={!task}>
        + Add Task
      </button>
        <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_TASKS" })}
      >
        Clear All
      </button>
    </div>
  );
}

export default TaskInput;