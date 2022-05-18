import { ShoppingProvider } from './context/ShoppingProvider';
import AddToList from './views/AddToList';
import ShoppingList from './views/ShoppingList';

export default function App() {
  return (
    <>
      <ShoppingProvider>
        <h2>Welcome to the List</h2>
        <AddToList />
        <ShoppingList />
      </ShoppingProvider>
    </>
  );
}
