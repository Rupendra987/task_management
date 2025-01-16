import React, { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, completed: false });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
  };

export default TaskForm;