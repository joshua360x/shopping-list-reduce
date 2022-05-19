import { useReducer, createContext, useContext, useEffect } from 'react'


export const ShoppingContext = createContext();

// add reducer function 
function listReducer(list, { type, payload }) {
  switch (type) {
    case 'create':
      const listentry = { ...payload, id: list.length }
      return [listentry, ...list];

      // on delete
    case 'delete':
      return list.filter((listItem) => listItem.id !== payload.id);

      // on refresh of page
    case 'normal':
      return [...payload]

  
    default:
      throw Error (`Action is Unknown: ${type}`);
  }
}

function ShoppingProvider({ children }) {
const [list, dispatch] = useReducer(listReducer, [])

useEffect(() => {
  const list = [
    {
      id: 0,
      name: 'eggs',
      quantity: 4
    }
  ]
  dispatch({type: 'normal', payload: list})
}, [])

function addToShoppingList(listItem) {
  const payload = {
    ...listItem
  }
  dispatch({type: 'create', payload})
  return payload;
}

function deleteFromShoppingList(id) {
  // let newList = list.splice(0, 1)
  // const payload = {
  //   ...listItem
  // }
  dispatch({type: 'delete', payload: { id }})
  // return payload;
}


  return (
    <ShoppingContext.Provider value={{list, addToShoppingList, deleteFromShoppingList}}>
      { children }
    </ShoppingContext.Provider>
  )

}

const useData = () => {
  const context = useContext(ShoppingContext);

  if (context === undefined) {
    throw new Error('useData must be used within a Shopping Provider');
  }

  return context;
};

export { ShoppingProvider, useData };

