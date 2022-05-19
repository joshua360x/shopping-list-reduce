import React, { useState } from 'react'
import { useData } from '../context/ShoppingProvider'

export default function ShoppingList() {
  const [isEditing, setIsEditing] = useState(false)
  const { list, deleteFromShoppingList } = useData();
  return (
    <div>
      <h3>Shopping List</h3>
      <>
      {/* <h4 onClick={deleteFromShoppingList(id)}>Delete All</h4> */}
        {list.map(({id, name, quantity}) => (
          <ul key={id+100}>
          <li key={id}>I need {quantity} {name}</li>
          <p onClick={() => deleteFromShoppingList(id)} key={id+10}  style={{'color': 'red'}}>Delete</p>
          </ul>
        ))}
      </>
    </div>
  )
}
