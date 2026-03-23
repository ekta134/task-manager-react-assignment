import { useTaskContext } from "../context/TaskContext";

function TaskSummary() {

  const { state } = useTaskContext();

  const total = state.tasks.length;

  const completed = state.tasks.filter(
    task => task.completed
  ).length;

  return (
    <div>

      <h3>Total Tasks: {total}</h3>
      <h3>Completed Tasks: {completed}</h3>

    </div>
  );
}

export default TaskSummary;