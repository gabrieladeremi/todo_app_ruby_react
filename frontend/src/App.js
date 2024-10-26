import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import { get_todos } from './api/endpoints';

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

  return (
    <div className='App'>
      <div className='app-container'>
        <h1 className='title'>Todo App</h1>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
