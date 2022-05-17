const { useReducer, createContext, useContext } = require("react");


export const shoppingContext = createContext();


export function ShoppingProvider({ children }) {
  // add reducer function 


  return (
    <shoppingContext.Provider>
      { children }
    </shoppingContext.Provider>
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

