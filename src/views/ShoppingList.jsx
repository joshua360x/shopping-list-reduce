import React from 'react'
import { useData } from '../context/ShoppingProvider'

export default function ShoppingList() {
  const { list } = useData();
  return (
    <div>
      <h3>Shopping List</h3>
      <ul>
        {list.map(({id, name, quantity}) => (
          <li key={id}>I need {quantity} {name}</li>
        ))}
      </ul>
    </div>
  )
}
