import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskBoard.css";

const TaskBoard = ({ title, tasks }) => {
  const [titleChange, setTitleChange] = useState(false);
  return (
    <section className="task_board">
      <div
        className="task_board_head"
        onDoubleClick={() => setTitleChange(true)}
      >
        <h2 contentEditable="true">{title}</h2>
      </div>
      <div style={{ overflow: "scroll", height: "81%" }}>
        {tasks.map(
          (task) => task.status === title && <TaskCard title={task.task} />
        )}
      </div>
      <footer className="task_board_foot">
        <button>+</button>
        <button>Delete</button>
      </footer>
    </section>
  );
};

export default TaskBoard;
