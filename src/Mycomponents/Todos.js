import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = ({todos,onDelete}) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>

            {todos.length === 0 ? "No Todos to Display" :
            todos.map((todos)=>
            {
              return <TodoItem todos={todos} onDelete={onDelete} />
            })
            }



        </div>
    )
}
