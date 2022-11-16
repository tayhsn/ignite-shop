import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CartItem {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface CartContextType {
  cartItemsTotal: number
  cartItems: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: string) => void
  checkIfAlreadyExists: (productId: string) => boolean
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartItemsTotal = cartItems.length

  const addToCart = (product: CartItem) => {
    setCartItems((state) => [...state, product])
  }

  const removeFromCart = (productId: string) => {
    const newCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(newCart)
  }

  const checkIfAlreadyExists = (productId: string) => {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsTotal,
        addToCart,
        removeFromCart,
        checkIfAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
