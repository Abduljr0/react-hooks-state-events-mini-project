import React from "react";
import Task from "./Task";
function TaskList({tasks, onDelete}) {
  const tasksList = tasks.map((task) => (
    <Task onDelete={onDelete} key={task.text} category={task.category} text={task.text}/>
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
   {tasksList}
    </div>
  );
}
export default TaskList;