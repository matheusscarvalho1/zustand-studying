// @src/components/AvailableProducts.tsx
import { useCartStore } from "../store/CartStore"

export const AvailableProducts = () => {
  const availableItems = useCartStore(state => state.availableItems)
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div>
      <h1>Choose a product</h1>
      <ul>
        {availableItems.map(item => (
          <li key={item.id}>
            {item.name} - R${item.price}
            {" "}
            <button onClick={() => addToCart(item)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
