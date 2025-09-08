export async function fetchProducts() {
// Using a public demo API (fakestoreapi). Replace with your real API if needed.
const res = await fetch('https://fakestoreapi.com/products?limit=12')
if (!res.ok) throw new Error('Failed to fetch products')
return res.json()
}