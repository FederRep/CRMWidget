import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import './AuthPage.css'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        await login(email, password)
        navigate('/dashboard')
      } else {
        if (!name.trim()) {
          throw new Error('Введите имя')
        }
        if (password.length < 6) {
          throw new Error('Пароль должен быть минимум 6 символов')
        }
        await register(email, password, name)
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Вход в аккаунт' : 'Регистрация'}</h2>
          <p>
            {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
            <button 
              type="button"
              className="auth-switch"
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
                setEmail('')
                setPassword('')
                setName('')
              }}
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Минимум 6 символов"
              required
              minLength={6}
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться')}
          </button>
        </form>

        {isLogin && (
          <div className="auth-demo">
            <p>Демо-аккаунт:</p>
            <code>demo@example.com</code>
            <code>пароль: 123456</code>
            <button 
              type="button"
              className="demo-btn"
              onClick={() => {
                setEmail('demo@example.com')
                setPassword('123456')
              }}
            >
              Заполнить демо
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthPage