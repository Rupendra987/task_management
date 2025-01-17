import React, { useEffect, useState } from "react";
import './HomePage.css'
import TaskList from "../TaskList";
import TaskForm from "../TaskForm";

function HomePage() {
    const initialValue = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : [];
    const [tasks, setTasks] = useState(initialValue);
    const [filteredTask, setFilteredTask] = useState(tasks);
    const [filterValue, setFilterValue] = useState('');
    const [sortType, setSortType] = useState('ASC');

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

    //Filter task logic
    const FilteredValue = () => {
        if (filterValue === 'Incomplete') {
            let value = tasks.filter((task) => task.completed == false)
            if (sortType === 'ASC') {
                value = value.sort((first, second) => (first.id > second.id ? 1 : second.id > first.id ? -1 : 0))
            } else {
                value = value.sort((first, second) => (first.id > second.id ? -1 : second.id > first.id ? 1 : 0))
            }
            setFilteredTask([...value])
        } else if (filterValue === 'Complete') {
            let value = tasks.filter((task) => task.completed == true)
            if (sortType === 'ASC') {
                value = value.sort((first, second) => (first.id > second.id ? 1 : second.id > first.id ? -1 : 0))
            } else {
                value = value.sort((first, second) => (first.id > second.id ? -1 : second.id > first.id ? 1 : 0))
            }
            setFilteredTask([...value])
        } else {
            let value = [...tasks]
            if (sortType === 'ASC') {
                value = value.sort((first, second) => (first.id > second.id ? 1 : second.id > first.id ? -1 : 0))
            } else {
                value = value.sort((first, second) => (first.id > second.id ? -1 : second.id > first.id ? 1 : 0))
            }
            setFilteredTask([...value])
        }
    }

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(tasks))
        FilteredValue()
    }, [tasks])

    useEffect(() => {
        FilteredValue()
    }, [filterValue])

    useEffect(() => {
        FilteredValue()
    }, [sortType])

    return (
        <div>
            <h1>Task Management</h1>
            <TaskForm addTask={addTask} />
            <div className="Section">
            <div className="Filter">
                <button className={'FilterButton ' + (filterValue === 'All' && 'active' )} onClick={() => { setFilterValue('All') }}>All</button>
                <button className={'FilterButton ' + (filterValue === 'Incomplete' && 'active' )} onClick={() => { setFilterValue('Incomplete') }}>Incomplete</button>
                <button className={'FilterButton ' + (filterValue === 'Complete' && 'active' )} onClick={() => { setFilterValue('Complete') }}>Completed</button>
            </div>
            <div className="Sort">
                <label> Sort by Create time 
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="ASC">Ascending</option>
                        <option value="DES">Descending</option>
                    </select>
                </label>
            </div>
            </div>
            <TaskList tasks={filteredTask} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
}

export default HomePage;