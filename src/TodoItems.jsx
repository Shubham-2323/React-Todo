import React, { useContext } from 'react'
import TodoItem from './Components/TodoItem'
import { ItemContext } from './store/ContextStore'

const TodoItems = () => {

    // const contextObj = useContext(ItemContext)
    // const todoItems = contextObj.todoItems

    const{todoItems} = useContext(ItemContext);

    return (
        <div className="item-container">
            {todoItems.map(item => {

                return <TodoItem key={item.name} task={item.name} date={item.dueDate}  />

            })}

        </div>

    )
}

export default TodoItems
