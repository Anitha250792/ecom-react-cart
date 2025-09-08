import React from 'react'
import useCart from '../hooks/useCart'


export default function ProductCard({ product }) {
const { addItem } = useCart()


return (
<div className="card">
<img src={product.image} alt={product.title} />
<h4 title={product.title}>{product.title}</h4>
<div className="small">{product.category}</div>
<div className="price">${product.price.toFixed(2)}</div>
<div style={{ marginTop: 'auto' }}>
<button className="btn btn-primary" onClick={() => addItem(product)}>
Add to cart
</button>
</div>
</div>
)
}