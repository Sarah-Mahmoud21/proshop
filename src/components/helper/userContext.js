// userContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

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

    // Load recently viewed data from storage when component mounts
    const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed'));
    if (storedRecentlyViewed) {
      setRecentlyViewed(storedRecentlyViewed);
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

  const addToRecentlyViewed = (product) => {
    console.log("Adding product to recently viewed:", product);
  
    // Ensure product is not null or undefined
    if (product && product.id) {
      // Check if the product already exists in the recently viewed list
      const existingIndex = recentlyViewed.findIndex((item) => item.id === product.id);
      
      // If the product is already in the list, remove it first
      if (existingIndex !== -1) {
        const updatedRecentlyViewed = [...recentlyViewed];
        updatedRecentlyViewed.splice(existingIndex, 1); // Remove the existing product
        updatedRecentlyViewed.unshift(product); // Add the product to the beginning of the array
        setRecentlyViewed(updatedRecentlyViewed.slice(0, 3)); 
      } else {
        // If the product is not in the list, add it
        const updatedRecentlyViewed = [product, ...recentlyViewed].slice(0, 5); // Add to the beginning and limit to 5 items
        setRecentlyViewed(updatedRecentlyViewed);
      }
    }
  };
  
  
  
  
  

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    
    localStorage.setItem('cart', JSON.stringify(cart));

    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [user, cart, recentlyViewed]);

  return (
    <UserContext.Provider value={{ user, cart, recentlyViewed, updateUser, addToCart, removeFromCart, addToRecentlyViewed }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
