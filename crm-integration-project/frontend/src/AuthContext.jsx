// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

function safeGet(key, fallback = null) {
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // In third-party iframes storage can be blocked; keep app usable.
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // Ignore storage failures in restricted iframe contexts.
  }
}

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = safeGet('auth_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        safeRemove('auth_user')
      }
    }
    setLoading(false)
  }, [])

  const register = (email, password, name) => {
    const users = JSON.parse(safeGet('registered_users', '[]') || '[]')
    
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
    safeSet('registered_users', JSON.stringify(users))
    
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    safeSet('auth_user', JSON.stringify(userWithoutPassword))
    
    if (!safeGet(`integrations_${newUser.id}`)) {
      safeSet(`integrations_${newUser.id}`, JSON.stringify([]))
    }
    
    if (!safeGet(`employees_${newUser.id}`)) {
      safeSet(`employees_${newUser.id}`, JSON.stringify([]))
    }
    
    return userWithoutPassword
  }

  const login = (email, password) => {
    const users = JSON.parse(safeGet('registered_users', '[]') || '[]')
    const user = users.find(u => u.email === email && u.password === btoa(password))
    
    if (!user) {
      throw new Error('Неверный email или пароль')
    }

    const { password: _, ...userWithoutPassword } = user
    setUser(userWithoutPassword)
    safeSet('auth_user', JSON.stringify(userWithoutPassword))
    
    return userWithoutPassword
  }

  const logout = () => {
    setUser(null)
    safeRemove('auth_user')
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