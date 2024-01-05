import React from 'react'
import { ItemContext } from '../store/ContextStore'
import { useContext } from 'react'

const WelcomeMsg = () => {


  // const contextObj = useContext(ItemContext)
  // const todoItems = contextObj.todoItems

  const{todoItems} = useContext(ItemContext);

  return (


    todoItems.length === 0 && <p className='para'>You have completed your all tasks <br /> Enjoy your day</p>


  )
}

export default WelcomeMsg
