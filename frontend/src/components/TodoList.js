import Todo from "./Todo"

// Todo takes a prop call todo_list

const TodoList = () => {
  return (
    <div className='todo-list'>
      <Todo todo_list='Todo 1'/>
      <Todo todo_list='Todo 2'/>
      <Todo todo_list='Todo 3'/>
    </div>
  )
}

export default TodoList;
