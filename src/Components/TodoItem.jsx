import React from 'react'
import { useContext } from 'react';
import { ItemContext } from '../store/ContextStore';

const TodoItem = ({ task, date }) => {


  // const handleDeleteClick = (task) => {
  //   handleDelete(task)
  // }

  const { deleteItem } = useContext(ItemContext);

  return (

    <div className="container" >
      <div className="row row-new">
        <div className="col-6">
          {task}
        </div>
        <div className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger row-button" onClick={() =>deleteItem(task)}>Delete</button>
        </div>
      </div>
    </div>

  )
}

export default TodoItem
