import { ShoppingProvider } from "./context/ShoppingProvider";
import ShoppingList from "./views/ShoppingList";

export default function App() {

  return <>
  <ShoppingProvider>

<h2>Welcome to the List</h2>
  <ShoppingList />
  </ShoppingProvider>
  </>;
}
