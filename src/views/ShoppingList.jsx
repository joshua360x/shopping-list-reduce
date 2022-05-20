import React, { useState } from 'react'
import { useData } from '../context/ShoppingProvider'

export default function ShoppingList() {
  const [isEditing, setIsEditing] = useState(false)
  const [stateName, setName] = useState(null)
  const [stateQuantity, setQuantity] = useState(null)
  const [stateId, setStateId] = useState('')
  const { list, deleteFromShoppingList, editItemInShoppingList } = useData();

  function handleEdit(id, name, quantity) {
    setName(name)
    setQuantity(quantity)
    setStateId(id)
    setIsEditing((prevState) => !prevState)

  }
  function handleSubmit(e) {
    e.preventDefault()
    // console.log('hey i am hit');
    editItemInShoppingList({name: stateName, quantity: stateQuantity, id: stateId})

  }

  return (
    <div>
      <h3>Shopping List</h3>
      <>
      {/* <h4 onClick={deleteFromShoppingList(id)}>Delete All</h4> */}
 
        {list.map(({id, name, quantity}) => (
          <ul key={id+100}>
          <li key={id}>I need {quantity} {name}</li>
          <p onClick={() => deleteFromShoppingList(id)} key={id+10}  style={{'color': 'red'}}>Delete</p>
          <p onClick={() => handleEdit(id, name, quantity)} style={{'color': 'purple'}}>Edit</p>
          {
        isEditing && stateId === id ? <>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" value={stateName !== null ? stateName : name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Quantity
            <input type="number" value={stateQuantity !== null ? stateQuantity : quantity} onChange={(e) => setQuantity(e.target.value)} />
          </label>
          <button>Update</button>
        </form>
        </> : ''
      }
          </ul>
        ))}
      </>
    </div>
  )
}
