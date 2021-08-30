import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    const todoClick = () => {
        toggleTodo(todo.id);
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={todoClick} />
                {todo.name}
            </label>
        </div>
    )
}
