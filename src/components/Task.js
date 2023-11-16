import React from "react";


function Task({text, category, onDelete, task}) {
  function handleOnClick(){
    onDelete(task)
  }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick= {handleOnClick}>X</button>
    </div>
  );
}

export default Task;
