"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCart = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                "http://localhost:3000/cart/getcart",
                { withCredentials: true }
            );
            setCart(res.data.cart);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (productId) => {
        await axios.patch(
            "http://localhost:3000/cart/remove",
            { productId },
            { withCredentials: true }
        );

        setCart(prev =>
            prev.filter(item => item.product.id !== productId)
        );
    };

    const updateQuantity = async (productId, type) => {
        const item = cart.find(i => i.product.id === productId);
        if (!item) return;

        const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
        try {
            if (newQty <= 0) {

                await axios.patch("http://localhost:3000/cart/remove", {
                    productId
                },
                    {
                        withCredentials: true,
                    });

                setCart(prev => prev.filter(i => i.product.id !== productId));
            } else {

                await axios.patch(
                    "http://localhost:3000/cart/update-quantity",
                    { productId, quantity: newQty },
                    { withCredentials: true }
                );

                setCart(prev =>
                    prev.map(i =>
                        i.product.id === productId ? { ...i, quantity: newQty } : i
                    )
                );
            }
        } catch (err) {
            console.log("Failed to update quantity:", err);
            fetchCart();
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        await axios.post(
            "http://localhost:3000/cart/add",
            { productId, quantity },
            { withCredentials: true }
        );

        fetchCart();
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                addToCart,
                removeFromCart,
                fetchCart,
                updateQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
