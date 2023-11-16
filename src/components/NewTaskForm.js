import React from "react";
import {useState} from "react";

function setTaskForm(props) {
  const [task, setTask] = useState({
    text: "",
    category: "All",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTaskFormSubmit(task);
    setTask({
      text: "",
      category: "All",
    });
  };
}
  const { categories } = props;

function NewTaskForm() {
  return (
    
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        {/* <select name="category"> */}
          {/* render <option> elements for each category here */}
        <select name="category" value={task.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
