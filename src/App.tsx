import { AvailableProducts } from "./components/AvailableProducts"
import { Cart } from "./components/Cart"
import { Total } from "./components/Total"

function App() {

  return (
    <>
      <h1>Zustand</h1>
      <hr />
      <AvailableProducts />
      <hr />
      <Cart />
      <hr />
      <Total />

    </>
  )
}

export default App
