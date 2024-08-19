import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title }) => {
  return (
    <div className="task_card">
      <h3>{title}</h3>
      <button>delete</button>
    </div>
  );
};

export default TaskCard;
