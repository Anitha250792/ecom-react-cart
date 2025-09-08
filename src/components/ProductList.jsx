import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import ProductCard from './ProductCard'


export default function ProductList() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchProducts()
.then(data => setProducts(data))
.catch(err => setError(err.message || 'Failed to load'))
.finally(() => setLoading(false))
}, [])


if (loading) return <div className="small">Loading products...</div>
if (error) return <div className="small">{error}</div>


return (
<div>
<h2>Products</h2>
<div className="product-grid">
{products.map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>
</div>
)
}