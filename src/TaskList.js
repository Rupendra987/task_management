import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './TaskList.css'

function TaskList({ tasks, updateTask, deleteTask }) {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Task Title</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
                </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    
                {/* <li key={task.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}> */}
                <td style={{ border: "1px solid #ddd", padding: "8px" }}><input type="checkbox" defaultChecked={task?.completed} value={task?.completed} onClick={() => updateTask({ ...task, completed: !task.completed })} /></td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}><Link to={`/task/${task.id}`}><span>{task.title}</span></Link></td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}><button className={'deleteButton'} onClick={() => deleteTask(task.id)}>Delete</button></td>
                    
                </tr>
            ))}
            </tbody>
        </table>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskList;