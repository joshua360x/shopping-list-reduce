import React, { useState } from 'react'
import { useData } from '../context/ShoppingProvider'

export default function AddToList() {
  const { addToShoppingList } = useData()
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addToShoppingList({name, quantity})
  }

  function handleName(e) {
    setName(e.target.value)
  }
  function handleQuantity(e) {
    setQuantity(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name of Item
        <input onChange={handleName} type="text" id='name' />
      </label>
      <br />
      <label htmlFor="quantity">
        Quantity of Item
        <input onChange={handleQuantity} type="number" id='quantity' />
      </label>
      <button>Add To Shopping List</button>
    </form>
  )
}
