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

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
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
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}

// by doing this we create something called fragments <> </>