import TaskCard from "../TaskCard/TaskCard";
import "./TaskBoard.css";

const TaskBoard = ({ title, tasks }) => {
  return (
    <section className="task_board">
      <div className="task_board_head">
        <h2>{title}</h2>
      </div>
      {tasks.map(
        (task) => task.status === title && <TaskCard title={task.task} />
      )}
    </section>
  );
};

export default TaskBoard;
