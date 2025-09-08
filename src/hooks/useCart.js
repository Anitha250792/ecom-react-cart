import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'


// Custom hook that exposes addItem, removeItem, clearCart (plus cart and totals)
export default function useCart() {
const ctx = useContext(CartContext)
if (!ctx) throw new Error('useCart must be used inside a CartProvider')
const { cart, addItem, removeItem, clearCart, totalItems, totalPrice } = ctx
return { cart, addItem, removeItem, clearCart, totalItems, totalPrice }
}