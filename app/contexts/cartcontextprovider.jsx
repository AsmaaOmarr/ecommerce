"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Function to fetch cart from API
  const getCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cart");
      if (!response.ok) throw new Error("Failed to fetch cart");
      
      const data = await response.json();
      setCart(data);
      updateCartCount(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, removeAll = false) => {
    if (removeAll) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);
