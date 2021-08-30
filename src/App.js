import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const addTodo = (e) => {
    const name = todoNameRef.current.value;
    if(name == ''){

    } else {
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, complete: false}];
      })
      todoNameRef.current.value = null;
    }
  }

  const clearCompleteTodo = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo} >Add Todo</button>
      <button onclick={clearCompleteTodo}>Clear Complete</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>{todos.filter(todo => !todo.complete).length}</div>
    </>
  );
}

export default App;
