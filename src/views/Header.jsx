import React from 'react'
import { useData } from '../context/ShoppingProvider'

export default function Header() {
  const {list} = useData()
  return (
    <h3>You have {list.length} Items on your Shopping List</h3>
  )
}
