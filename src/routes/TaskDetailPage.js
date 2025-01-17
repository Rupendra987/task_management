import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function TaskDetailPage() {
    const { id } = useParams();
    const [task, setTasks] = useState([])

    useEffect(() => {
        const taskValue = JSON.parse(localStorage.getItem('data'))
        const filtervalue = taskValue.filter((data) => data.id == id);
        setTasks({ ...filtervalue[0] });
    }, [])

    return (
        <div>
            <Navbar />
            <h2>Task Details</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <tbody>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Task ID</th>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{task.id}</td>
                    </tr>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{task.title}</td>
                    </tr>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Completed</th>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                            {task.completed ? "Completed" : "Not Completed"}
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Created At</th>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{task.createAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TaskDetailPage;