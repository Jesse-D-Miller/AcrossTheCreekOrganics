import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) { 
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  // Function to remove item from cart
  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
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