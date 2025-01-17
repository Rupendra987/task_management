import React, { useEffect, useState } from "react";
import TaskList from "../TaskList";
import TaskForm from "../TaskForm";

function HomePage() {
  const initialValue = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')): [];  
  const [tasks, setTasks] = useState(initialValue);
  const [filteredTask, setFilteredTask] = useState(tasks);
  const [filterValue, setFilterValue] = useState('');

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

  const setFilteredValue = () => {
    if(filterValue === 'Incomplete'){
        const value = tasks.filter((task) => task.completed == false)
        setFilteredTask([...value])
    } else if (filterValue === 'Complete'){
        const value = tasks.filter((task) => task.completed == true)
        setFilteredTask([...value])
    } else {
        setFilteredTask([...tasks])
    }
  }

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(tasks))
    setFilteredValue()
  },[tasks])

  useEffect(() => {
    setFilteredValue()
  },[filterValue])

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm addTask={addTask} />
      <div>
        <button onClick={() => {setFilterValue('All')}}>All</button>
        <button onClick={() => {setFilterValue('Incomplete')}}>Incomplete</button>
        <button onClick={() => {setFilterValue('Complete')}}>Completed</button>
      </div>
      <TaskList tasks={filteredTask} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default HomePage;