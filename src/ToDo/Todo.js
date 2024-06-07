import React, { useState } from "react";
import './Todo.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Sleep by 2 a.m", "Get up by 6 a.m", "Take a Shower", "Make Breakfast and eat", "Code for 6 hours", "Take a walk by 4 p.m"]);
    const [newTask, setNewTask] = useState("");

    const inputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // swapping index
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // swapping index
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={inputChange} />
                &nbsp;
                <button className="add-button"
                    onClick={addTask}
                    disabled={newTask.trim() === ""}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>

                    <button className="delete-button" onClick={() => deleteTask(index)}>
                        Delete
                    </button>

                    <button className="move-button" onClick={() => moveTaskUp(index)}>
                        ☝
                    </button>

                    <button className="move-button" onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;
