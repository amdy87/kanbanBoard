import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title }) => {
  return (
    <div className="task_card">
      <h3>{title}</h3>
      <button style={{ marginLeft: "10px", height: "30px" }}>delete</button>
    </div>
  );
};

export default TaskCard;
