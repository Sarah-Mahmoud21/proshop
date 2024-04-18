// userContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load user data from storage when component mounts
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    
    // Load cart data from storage when component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity = quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    // Save user data to storage whenever it changes
    localStorage.setItem('user', JSON.stringify(user));
    
    // Save cart data to storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [user, cart]);

  return (
    <UserContext.Provider value={{ user, cart, updateUser, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
