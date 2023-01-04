import React from 'react'

const TodoList =({todos})=>{
    return (
        <div>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <input type='text' value={todo.title} onchange={(e)=>e.preventDefault()}></input>
                </li>
            ))}
        </div>
    )
}
export default TodoList