import React from "react";
import TaskBoard from "./components/Task Board/TaskBoard";
import "./App.css";

const App = () => {
  const boards = ["To do", "Doing", "Done"];
  const tasks = [
    { task: "task 1", status: "To do" },
    { task: "task 2", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 3", status: "Doing" },
  ];

  return (
    <div className="app">
      <header className="app_head">
        <h1>Kanban Board</h1>
      </header>
      <main className="app_main">
        <button className="delete_button" style={{ backgroundColor: "white" }}>
          Add Task Board
        </button>
        <div className="container">
          {boards.map((board, index) => (
            <TaskBoard title={board} key={index} tasks={tasks} />
          ))}
        </div>
        <button className="delete_button">Clear Tasks</button>
      </main>
    </div>
  );
};

export default App;
