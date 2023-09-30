import React from 'react';
import '../styles/Tasks.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Task({id, text, completed, completeTask, deleteTask}) {
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text"
                onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className="task-icons-container"
            onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
        </div>
    )
}