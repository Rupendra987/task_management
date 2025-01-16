import React, { useEffect, useState } from "react";
import TaskList from "../TaskList";
import TaskForm from "../TaskForm";

function HomePage() {
  const initialValue = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')): [];  
  const [tasks, setTasks] = useState(initialValue);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), createAt: new Date().toLocaleString() }]);
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(tasks))
  },[tasks])

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default HomePage;