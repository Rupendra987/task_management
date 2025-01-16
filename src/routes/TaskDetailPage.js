import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTasks] = useState([])

    useEffect(() => {
        const taskValue = JSON.parse(localStorage.getItem('data'))
        const filtervalue = taskValue.filter((data) => data.id == id);
        setTasks({...filtervalue[0]});
    },[])

  return (
    <div>
        <Navbar />
      <h2>Task Detail</h2>
      <p>Task ID: {task.id}</p>
      <p>Task Title: {task.title}</p>
      <p>Task Completion: {task.completed ? 'Completed' : 'Not Completed'}</p>
      <p>Task Creation Date: {task.createAt}</p>
    </div>
  );
}

export default TaskDetailPage;