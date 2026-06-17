import React, { useState } from 'react';
import './index.css';

function ToDoList() {

    const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {  
       if(newTask.trim() !== "") {
           setTasks([...tasks,newTask]);
           setNewTask(""); // Clear the input field after adding a task
       }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => {
            return i !== index;
        });
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }



    return (
    
    <div className="todo-list">
    <h1>To-Do List </h1>
        <div className="input-container">
            <input
            type="text"
            placeholder="Enter a new task..."
            onChange={handleInputChange}
            />
            <button 
            className="add-button" 
            onClick={addTask}>
                Add Task
            </button>
        </div>
    
    <ol className="task-list">
        {tasks.map((task, index) => (
            <li key={index} className="task-item">
                {index+1}. {task}
                <button
                className="remove-button" 
                onClick={() => removeTask(index)}>
                    Remove
                </button>

                <button
                className="moveup-button" 
                onClick={() => moveTaskUp(index)}>
                    Move Up
                </button>

                <button
                className="movedown-button" 
                onClick={() => moveTaskDown(index)}>
                    Move Down
                </button>
            </li>
        ))}
    </ol>
     
     
    </div>
     
    );
}
export default ToDoList;