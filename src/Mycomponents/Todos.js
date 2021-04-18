import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = ({todos}) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>

            {todos.map((todos)=>
            {
              return <TodoItem todos={todos} />
            })}


        </div>
    )
}
