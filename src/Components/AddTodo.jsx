import React from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { ItemContext } from '../store/ContextStore';

// import { useState } from 'react';
// import { IoIosAdd } from "react-icons/io";
// import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const AddTodo = () => {

    
    const{addNewItem} = useContext(ItemContext);

    const nameItem = useRef();
    const dateDue = useRef();


    // const [itemName, setitemName] = useState('');
    // const [dueDate, setdueDate] = useState('');
    // const handleName = (e) => {
    //     console.log(e.target.value)
    //     setitemName(e.target.value)
    // }

    // const handleDate = (e) => {
    //     console.log(e.target.value)
    //     setdueDate(e.target.value)
    // }

    const handleAddBtnClicked = (e) => {
        e.preventDefault();
        const itemName = nameItem.current.value
        const dueDate = dateDue.current.value


        addNewItem(itemName, dueDate)
        nameItem.current.value = ('')
        dateDue.current.value = ('')


        // setdueDate('')
        // setitemName('')
    }


    return (
        <div className="container text-center " >
            <form className='row row-new' onSubmit={handleAddBtnClicked}>

                <div className="col-6">
                    <input type="text" key={nameItem.current} ref={nameItem} placeholder='Type something here' />
                </div>
                <div className="col-4">
                    <input type="date"  ref={dateDue} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success row-button" ><IoMdAdd />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
