import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import { get_todos, create_todo } from './api/endpoints';

import { useState, useEffect } from 'react';


function App() {

  // initialize use state to keep track of the state of todo
  // set to [] on load of the app
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos.data);
      console.log(todos)
    }
    fetchTodos();
  }, [])

  const addTodo = async (todo_name) => {
    const todo = create_todo(todo_name)

    setTodos([todo, ...todos])
  }

  return (
    <div className='App'>
      <div className='app-container'>
        <h1 className='title'>Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
