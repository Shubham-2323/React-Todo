import React, { createContext } from 'react'
import { useReducer } from 'react'


export const ItemContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },

})


const ItemContextProvider = ({ children }) => {

    const initialTodoItems = [{
        name: 'Buy Milk',
        dueDate: '12-12-2023'
    },
    {
        name: 'Go to college',
        dueDate: '16-12-2023'
    },
    {
        name: 'Follow me',
        dueDate: 'Do it now'
    }
    ]

    const todoReducer = (currState, action) => {

        let newItemsList = currState;

        if (action.type === 'New_Item') {
            newItemsList = [...currState, {
                name: action.payload.item,
                dueDate: action.payload.date
            }]

        } else if ((action.type === 'DELETE_Item')) {
            newItemsList = currState.filter(item => { return item.name !== action.payload.itemname })

            console.log(`item :${action.payload.itemname}`)
        }
        return newItemsList;
    }
    // const [todoItems, settodoItems] = useState(initialTodoItems);
    const [todoItems, dispatchTodoItems] = useReducer(todoReducer, initialTodoItems);

    const addNewItem = (item, date) => {

        const newItemAction = {
            type: 'New_Item',
            payload: {
                item,
                date
            }
        }
        dispatchTodoItems(newItemAction)

        // diff
        // const func = (` ${item} ${date}`)
        // console.log(func)

        // diff
        // const newItemsList = [...todoItems, {
        //   name: item,
        //   dueDate: date
        // }]

        // settodoItems(newItemsList)

        // diff
        // settodoItems((currValue) => [...currValue, {
        //   name: item,
        //   dueDate: date
        // }]

        // )  
    }

    const deleteItem = (itemName) => {

        // const todoItemName = todoItems.filter(item => { return item.name !== itemName })
        // settodoItems(todoItemName)
        // console.log(`item :${itemName}`)

        const delItemAction = {
            type: 'DELETE_Item',
            payload: {
                itemname: itemName
            }
        }
        dispatchTodoItems(delItemAction)
    }
    return (<ItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
        {children}
    </ItemContext.Provider>
    )
}

export default ItemContextProvider;
