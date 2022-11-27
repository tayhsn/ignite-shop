import { createContext, ReactNode, useContext, useState } from 'react';

export interface CartItem {
   id: string;
   name: string;
   description: string;
   imageUrl: string;
   price: string;
   priceNumber: number;
   defaultPriceId: string;
}

interface CartContextType {
   totalPrice: number;
   cartQuantity: number;
   cartItems: CartItem[];
   addToCart: (product: CartItem) => void;
   removeFromCart: (productId: string) => void;
   checkIfAlreadyExists: (productId: string) => boolean;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
   children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
   const [cartItems, setCartItems] = useState<CartItem[]>([]);

   const cartQuantity = cartItems.length;

   const totalPrice = cartItems.reduce((total, product) => {
      return total + product.priceNumber;
   }, 0);

   const addToCart = (product: CartItem) =>
      setCartItems((state) => [...state, product]);

   const removeFromCart = (productId: string) => {
      const newCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(newCart);
   };

   const checkIfAlreadyExists = (productId: string) =>
      cartItems.some((product) => product.id === productId);

   return (
      <CartContext.Provider
         value={{
            totalPrice,
            cartItems,
            cartQuantity,
            addToCart,
            removeFromCart,
            checkIfAlreadyExists,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

export const useCart = () => useContext(CartContext);
