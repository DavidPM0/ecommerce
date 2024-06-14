import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenido a Velox!"}/>
    </div>
  )
}

export default App;
