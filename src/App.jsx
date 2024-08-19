import React from "react";
import TaskBoard from "./components/Task Board/TaskBoard";
import "./App.css";

const App = () => {
  const boards = ["To do", "Doing", "Done", "Review"];
  const tasks = [
    { task: "task 1", status: "To do" },
    { task: "task 2", status: "Doing" },
    { task: "task 3", status: "Doing" },
    { task: "task 5", status: "Review" },
  ];

  return (
    <div className="app">
      <main className="app_main">
        {boards.map((board, index) => (
          <TaskBoard title={board} key={index} tasks={tasks} />
        ))}
      </main>
    </div>
  );
};

export default App;
