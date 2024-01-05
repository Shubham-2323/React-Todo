import React, { useReducer } from 'react'
import AppName from './Components/AppName'
import AddTodo from './Components/AddTodo'
import './App.css'
// import './App.css'
import TodoItems from './TodoItems'
// import { useState } from 'react'
import WelcomeMsg from './Components/WelcomeMsg'
// import { ItemContext } from './store/ContextStore'
import ItemContextProvider from './store/ContextStore'

const App = () => {

  return (
    <div>
      <ItemContextProvider>
        <center className='Todo-Container'>
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />


        </center>
      </ItemContextProvider>
    </div>

  )
}

export default App
