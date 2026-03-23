import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, title: editText }
    });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {/* Task title */}
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="task-input"
        />
      ) : (
        <span className={`task-title ${task.completed ? "completed" : ""}`}>
          {task.title}
        </span>
      )}

      {/* Right side: Status badge + buttons */}
<div className="task-buttons">
  <span
    className={`status-badge ${task.completed ? "completed" : "incomplete"}`}
    onClick={() =>
      dispatch({ type: "TOGGLE_TASK", payload: task.id })
    }
  >
    {task.completed ? "Completed" : "Incomplete"}
  </span>

  {isEditing ? (
    <button className="edit-btn" onClick={saveEdit}>Save</button>
  ) : (
    <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
  )}

  <button className="delete-btn"
    onClick={() =>
      dispatch({ type: "DELETE_TASK", payload: task.id })
    }
  >
    Delete
  </button>
</div>
    </div>
  );
}

export default TaskItem;