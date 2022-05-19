import { ShoppingProvider } from './context/ShoppingProvider';
import AddToList from './views/AddToList';
import Header from './views/Header';
import ShoppingList from './views/ShoppingList';

export default function App() {
  return (
    <>
      <ShoppingProvider>
        <h2>Welcome to the List</h2>
        <Header />
        <AddToList />
        <ShoppingList />
      </ShoppingProvider>
    </>
  );
}
