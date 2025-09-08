import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext(null)


export function AuthProvider({ children }) {
const [user, setUser] = useState(null)


function login(name = 'User') {
// naive demo login — replace with real auth
setUser({ name })
}


function logout() {
setUser(null)
}


return (
<AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
{children}
</AuthContext.Provider>
)
}


export function useAuth() {
const ctx = useContext(AuthContext)
if (!ctx) throw new Error('useAuth must be used inside an AuthProvider')
return ctx
}