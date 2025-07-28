import { useState, useEffect } from 'react';
import { cartManager, CartItem } from '@/lib/cart';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Initial load
    setItems(cartManager.getItems());
    setTotalItems(cartManager.getTotalItems());
    setTotalPrice(cartManager.getTotalPrice());

    // Subscribe to changes
    const unsubscribe = cartManager.subscribe(() => {
      setItems(cartManager.getItems());
      setTotalItems(cartManager.getTotalItems());
      setTotalPrice(cartManager.getTotalPrice());
    });

    return unsubscribe;
  }, []);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    cartManager.addItem(item, quantity);
  };

  const removeItem = (id: number) => {
    cartManager.removeItem(id);
  };

  const updateQuantity = (id: number, quantity: number) => {
    cartManager.updateQuantity(id, quantity);
  };

  const clearCart = () => {
    cartManager.clearCart();
  };

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };
};