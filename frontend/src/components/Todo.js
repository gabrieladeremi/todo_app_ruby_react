import { RiDeleteBack2Line } from "react-icons/ri"
import { useState } from "react"

import { update_todo } from "../api/endpoints"

// Todo function accepts props from TodoList class passed from the child called Todo

const Todo = ({id, todo_name, completed, deleteTodo}) => {

  const [isChecked, setIsChecked] = useState(completed)

  const handleDelete = async () => {
    await deleteTodo(id)
  }

  const handleComplete = async () => {
    await update_todo(id, !isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <div className='todo'>
      <div className='todo-container'>
        <input
          checked={isChecked}
          onClick={handleComplete}
          type='checkbox'
        />
        <h3> {todo_name} </h3>
        <RiDeleteBack2Line
          size='20px'
          onClick={handleDelete}
        />
      </div>
    </div>
  )
}

export default Todo
