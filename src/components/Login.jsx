import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'


export default function Login() {
const { user, login, logout } = useAuth()
const [name, setName] = useState('')


if (user) {
return (
<button className="btn btn-ghost" onClick={logout}>Logout</button>
)
}


return (
<div style={{ display:'flex', gap:8, alignItems:'center' }}>
<input value={name} onChange={e => setName(e.target.value)} placeholder="Name" style={{ padding:6 }} />
<button className="btn btn-primary" onClick={() => login(name || 'User')}>Login</button>
</div>
)
}