import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  seller: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToWishlist: (item: CartItem) => void;
  removeFromWishlist: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const addToWishlist = (item: CartItem) => {
    setWishlist(prev => [...prev, item]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}