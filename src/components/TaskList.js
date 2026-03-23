import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {

  const { state } = useTaskContext();

  return (
    <div className="task-list"> 

      {state.tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}

    </div>
  );
}

export default TaskList;