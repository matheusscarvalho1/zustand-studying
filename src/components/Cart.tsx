import { useCartStore } from "../store/CartStore";

export const Cart = () => {
  const items = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - R${item.price}
            {" "}
            <button onClick={() => removeFromCart(item.id)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
