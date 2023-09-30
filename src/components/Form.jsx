import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import '../styles/Form.css'

export default function TaskForm (props) {

  const [input, setInput] = useState('')

  // e is for event
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSend = e => {
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask)
  }

  return (
      <form 
      className="task-form"
      onSubmit={handleSend}>
        <input
          className="task-input"
            type="text"
            placeholder="Type your new task here"
            name="text"
            onChange={handleChange}
        />
        <button className="task-button">
          Add New Task
        </button>
    </form>
    )
}