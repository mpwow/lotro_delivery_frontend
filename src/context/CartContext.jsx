import { createContext, useContext, useState } from "react";
import { CartItem } from "../domain/CartItem";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);

  const addToCart = (meal) => {
    setCartItems((prevCartState) => {
      const existItem = prevCartState.find((item) => item.meal.id === meal.id);

      if (existItem) {
        return prevCartState.map((item) => (item.meal.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        const newItem = new CartItem({ meal, quantity: 1 });
        return [...prevCartState, newItem];
      }
    });
  };

  const removeFromCart = (meal) => {
    setCartItems((prevCartState) => {
      const existItem = prevCartState.find((item) => item.meal.id === meal.id);

      if (existItem && existItem.quantity > 1) {
        return prevCartState.map((item) => (item.meal.id === meal.id ? { ...item, quantity: item.quantity - 1 } : item));
      }
      if (existItem && existItem.quantity === 1) {
        return prevCartState.filter((item) => item.meal.id !== meal.id);
      }
    });
  };

  const clearCart = () => setCartItems([]);

  const removeCurrentItemFromCart = (meal) => {
    setCartItems((prevCartState) => {
      const existItem = prevCartState.find((item) => item.meal.id === meal.id);
      if (existItem) {
        return prevCartState.filter((item) => item.meal.id !== meal.id);
      }
    });
  };
  const cartCount = () => cartItems.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
  const openCart = () => setCartIsOpened(true);
  const closeCart = () => setCartIsOpened(false);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    openCart,
    closeCart,
    cartIsOpened,
    removeCurrentItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
