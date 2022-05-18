const { useReducer, createContext, useContext, useEffect } = require("react");


export const ShoppingContext = createContext();

// add reducer function 
function listReducer(list, { type: payload }) {
  switch (type) {
    case 'create':
      const listentry = { ...payload, id: list.length }
      return [listentry, ...list];
      // break;
    case 'normal':
      return [...payload]
      // break;
  
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


  return (
    <ShoppingContext.Provider value={{list, addToShoppingList}}>
      { children }
    </ShoppingContext.Provider>
  )

}

const useData = () => {
  const context = useContext(shoppingContext);

  if (context === undefined) {
    throw new Error('useData must be used within a Shopping Provider');
  }

  return context;
};

export { ShoppingProvider, useData };

