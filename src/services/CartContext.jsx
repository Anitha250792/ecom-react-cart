import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext(null)
const STORAGE_KEY = 'cart_v1'


export function CartProvider({ children }) {
const [cart, setCart] = useState(() => {
try {
const raw = localStorage.getItem(STORAGE_KEY)
return raw ? JSON.parse(raw) : []
} catch (e) {
console.error('Failed to parse cart from localStorage', e)
return []
}
})


// persist cart whenever it changes
useEffect(() => {
try {
localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
} catch (e) {
console.error('Failed to save cart', e)
}
}, [cart])


function addItem(product) {
setCart(prev => {
const exists = prev.find(i => i.id === product.id)
if (exists) {
return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
}
return [...prev, { ...product, quantity: 1 }]
})
}


function removeItem(productId) {
setCart(prev => {
const exists = prev.find(i => i.id === productId)
if (!exists) return prev
if (exists.quantity > 1) {
return prev.map(i => i.id === productId ? { ...i, quantity: i.quantity - 1 } : i)
}
return prev.filter(i => i.id !== productId)
})
}


function clearCart() {
setCart([])
}


const totalItems = cart.reduce((s, i) => s + (i.quantity || 0), 0)
const totalPrice = cart.reduce((s, i) => s + (i.quantity || 0) * (i.price || 0), 0)


const value = { cart, addItem, removeItem, clearCart, totalItems, totalPrice }


return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}