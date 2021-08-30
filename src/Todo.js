import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    const todoClick = () => {
        toggleTodo(todo.id);
    }
    return (
        <div className="todo">
            <label>
                <input type="checkbox" checked={todo.complete} onChange={todoClick} />
                {todo.name} | Deadline: {todo.date}
            </label>
        </div>
    )
}
