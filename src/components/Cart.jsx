import React from 'react'
import useCart from '../hooks/useCart'
import { useAuth } from '../contexts/AuthContext'


export default function Cart() {
const { cart, removeItem, clearCart, totalItems, totalPrice } = useCart()
const { isAuthenticated } = useAuth()


function handleCheckout() {
if (!isAuthenticated) {
alert('Please login to checkout')
return
}


// simulate checkout
alert(`Checked out ${totalItems} items for $${totalPrice.toFixed(2)}`)
clearCart()
}


return (
<div>
<h3>Cart</h3>
<div className="small">{totalItems} item(s)</div>


{cart.length === 0 && <div className="small">Your cart is empty</div>}


{cart.map(item => (
<div key={item.id} className="cart-item">
<img src={item.image} alt={item.title} style={{ width:56, height:56, objectFit:'contain' }} />
<div style={{ flex:1 }}>
<div style={{ fontWeight:600 }}>{item.title}</div>
<div className="small">${item.price.toFixed(2)} × <span className="qty">{item.quantity}</span></div>
</div>
<div style={{ display:'flex', flexDirection:'column', gap:6 }}>
<button className="btn btn-ghost" onClick={() => removeItem(item.id)}>−</button>
</div>
</div>
))}


<div style={{ marginTop:12, fontWeight:700 }}>Total: ${totalPrice.toFixed(2)}</div>


<div style={{ display:'flex', gap:8, marginTop:12 }}>
<button className="btn btn-primary" onClick={handleCheckout}>
Checkout
</button>
<button className="btn btn-ghost" onClick={clearCart}>Clear</button>
</div>
</div>
)
}