import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Login from './components/Login'
import { useAuth } from './contexts/AuthContext'


export default function App() {
const { user } = useAuth()


return (
<div className="app-root">
<header className="header">
<h1>My Shop</h1>
<div className="header-right">
<div className="user">{user ? `Hello, ${user.name}` : 'Guest'}</div>
<Login />
</div>
</header>


<main className="main-grid">
<section className="products">
<ProductList />
</section>


<aside className="cart">
<Cart />
</aside>
</main>


<footer className="footer">Demo E-commerce cart · built with React</footer>
</div>
)
}