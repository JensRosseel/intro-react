import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const todoDateRef = useRef();

  // Set initial local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Add items to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Toggle todos to complete/incomplete
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  // Add a todo
  const addTodo = (e) => {
    const name = todoNameRef.current.value;
    const date = todoDateRef.current.value;

    if(name === '') {

    } else if(date === '') {

    } else {
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, date: date, complete: false}];
      })
      todoNameRef.current.value = null;
      todoDateRef.current.value = null;
    }
  }

  // Clear all completed todos
  const clearCompleteTodo = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  // output for view
    return (
      <div className="content">
        <div className="entry">
          <input ref={todoNameRef} type="text" placeholder="What needs to be done?" />
          <input ref={todoDateRef} type="date" />
        </div>
        <div className="buttons">
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={clearCompleteTodo}>Clear Complete</button>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className="footer">{todos.filter(todo => !todo.complete).length} items left</div>
      </div>
    );

}

export default App;
