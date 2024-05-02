import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    useEffect(() => {
        const newTotalPrice = cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const newTotalQuantity = cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        setTotalPrice(newTotalPrice);
        setTotalQuantity(newTotalQuantity);
      }, [cartItems]);
    
 

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
