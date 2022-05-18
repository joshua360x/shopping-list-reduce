import React from 'react'
import { useData } from '../context/ShoppingProvider'

export default function AddToList() {
  const { addToShoppingList } = useData()

  function handleSubmit(e) {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name of Item
        <input type="text" id='name' />
      </label>
      <label htmlFor="quantity">
        Quantity of Item
        <input type="number" id='quantity' />
      </label>
    </form>
  )
}
