import { useState } from "react"

import TaskForm from "./Form"
import '../styles/TasksList.css'
import Task from "./Task"

export default function TasksList() {

  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim()

      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks)
    }
  }

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}            
              text={task.text}
              completed={task.completed}
            />
          )
        }
      </div>
    </>
  )
}

// by doing this we create something called fragments <> </>