// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem('auth_user')
      }
    }
    setLoading(false)
  }, [])

  const register = (email, password, name) => {
    const users = JSON.parse(localStorage.getItem('registered_users') || '[]')
    
    if (users.find(u => u.email === email)) {
      throw new Error('Пользователь с таким email уже существует')
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      password: btoa(password)
    }

    users.push(newUser)
    localStorage.setItem('registered_users', JSON.stringify(users))
    
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem('auth_user', JSON.stringify(userWithoutPassword))
    
    if (!localStorage.getItem(`integrations_${newUser.id}`)) {
      localStorage.setItem(`integrations_${newUser.id}`, JSON.stringify([]))
    }
    
    if (!localStorage.getItem(`employees_${newUser.id}`)) {
      localStorage.setItem(`employees_${newUser.id}`, JSON.stringify([]))
    }
    
    return userWithoutPassword
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('registered_users') || '[]')
    const user = users.find(u => u.email === email && u.password === btoa(password))
    
    if (!user) {
      throw new Error('Неверный email или пароль')
    }

    const { password: _, ...userWithoutPassword } = user
    setUser(userWithoutPassword)
    localStorage.setItem('auth_user', JSON.stringify(userWithoutPassword))
    
    return userWithoutPassword
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
  }

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}