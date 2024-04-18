import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const addToCart = (product, quantity) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // Update the quantity of the existing product
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add the new product to the cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <UserContext.Provider value={{ user, cart, updateUser, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
