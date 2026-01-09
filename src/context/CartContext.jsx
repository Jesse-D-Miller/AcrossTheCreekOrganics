import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) { 
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  function addToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + (item.quantity || 1) }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: item.quantity || 1 }];
      }

    });
  }

  // Function to remove item from cart
  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  // decrement quantity and remove if quantity is 0
  function decrementItem(itemId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => (item.quantity || 1) > 0)
    );
  }

  // increment quantity
  function incrementItem(itemId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }

  // Function to clear cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}