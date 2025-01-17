import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TaskList({ tasks, updateTask, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input type="checkbox" defaultChecked={task?.completed} value={task?.completed} onClick={() => updateTask({ ...task, completed: !task.completed })} />
                    <Link to={`/task/${task.id}`}><span>{task.title}</span></Link>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskList;