import { create } from 'zustand';

const initialItems = [
  { id: 1, name: 'Notebook Dell Inspiron', price: 3500.00 },
  { id: 2, name: 'Smartphone Samsung Galaxy S21', price: 2800.00 },
  { id: 3, name: 'Monitor LG 24"', price: 899.90 },
  { id: 4, name: 'Teclado Mecânico RGB', price: 450.00 },
  { id: 5, name: 'Mouse Gamer Logitech G203', price: 199.99 }
]

type Item = {
    id: number;
    name: string;
    price: number;
}

type CartStore = {
availableItems: Item[];
cart: Item[];
addToCart: (item: Item) => void;
removeFromCart: (id: number) => void;

}

export const useCartStore = create<CartStore>((set) => {

    return {
        cart: [],
        availableItems: initialItems,
        addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
        removeFromCart: (id) => set((state) => ({
            cart: state.cart.filter(item => item.id !== id)
        })),
        
    }
});