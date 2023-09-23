import React from "react";
import '../styles/Form.css'

export default function TaskForm (props) {
    return (
        <form className="task-form">
            <input
              className="task-input"
                type="text"
                placeholder="Type your new task here"
                name="text"
            />
            <button className="task-button">
              Add New Task
            </button>
        </form>
    )
}