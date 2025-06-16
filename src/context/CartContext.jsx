import { createContext, useContext, useState } from "react";
import { CartItem } from "../domain/CartItem";

// TO DO - переименовать в Checkout context

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);

  // Стейты для order details модалки
  const [orderIsOpened, setOrderIsOpened] = useState(false);

  // Стейты для order results модалки
  const [resultModalIsOpened, setResultModalIsOpened] = useState(false);

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
  const cartTotalCost = () => cartItems.reduce((acc, currentItem) => acc + currentItem.meal.price * currentItem.quantity, 0);
  const openCart = () => setCartIsOpened(true);
  const closeCart = () => setCartIsOpened(false);

  const openOrderDetailsModal = () => setOrderIsOpened(true);
  const closeOrderDetailsModal = () => setOrderIsOpened(false);

  const openResultModal = () => setResultModalIsOpened(true);
  const closeResultModal = () => setResultModalIsOpened(false);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotalCost,
    openCart,
    closeCart,
    cartIsOpened,
    removeCurrentItemFromCart,
    orderIsOpened,
    openOrderDetailsModal,
    closeOrderDetailsModal,
    resultModalIsOpened,
    openResultModal,
    closeResultModal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
