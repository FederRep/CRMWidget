import React from 'react'
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { useTheme } from './ThemeContext'
import './App.css'
import logo from './assets/logo.png'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import PricingPage from './pages/PricingPage'
import SupportSection from './components/SupportSection'
import LiquidEther from '../LiquidEther/LiquidEther'

function Layout({ children }) {
  const { isAuthenticated } = useAuth()
  const { isDark } = useTheme()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="app">
      {/* LiquidEther фон */}
      <div className="liquid-ether-background">
        <LiquidEther
          colors={isDark ? ['#2f00ed', '#0044ff', '#00aaff', '#7fd4ff'] : ['#0044ff', '#0044ff', '#0044ff', '#0044ff']}
          mouseForce={40} // ['#2f00ed', '#0011ff', '#0044FF']
          cursorSize={80}
          isViscous
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={8}
          resolution={0.4}
          isBounce={false}
          autoDemo
          autoSpeed={0.2}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <header className="header">
        <h2>Corsa Messenger Integrator</h2>

        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/privacy" 
            className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}
          >
            Политика и реквизиты
          </Link>
          <Link 
            to="/pricing" 
            className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
          >
            Тарифы
          </Link>
          <Link 
            to={isAuthenticated ? '/dashboard' : '/auth'} 
            className={`nav-link ${isActive('/auth') || isActive('/dashboard') ? 'active' : ''}`}
          >
            {isAuthenticated ? 'Личный кабинет' : 'Авторизация'}
          </Link>
        </nav>
      </header>

      <div className="content">{children}</div>

      <footer className="footer">
        © 2026 Corsa Messenger Integrator. All rights reserved.
      </footer>
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <h1>Интеграция Мессенджеров ↔ amoCRM</h1>
      
      <div className="logo-wrap">
        <img src={logo} alt="Corsa Messenger Integrator" />
      </div>

      <p className="description">
        Безопасная интеграция для обмена сообщениями между Мессенджерами и CRM системой.
      </p>

      <div className="features">
        <div className="feature">1. Установите виджет в аккаунте amoCRM</div>
        <div className="feature">2. Авторизуйся в Corsa</div>
        <div className="feature">3. Выбери каналы связи</div>
        <div className="feature">4. Выбери тарифный план и тестируй в течении 3 дней</div>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/auth" className="btn-support">Начать работу</Link>
      </div>

      <SupportSection />
    </Layout>
  )
}

function Setup() {
  return (
    <Layout>
      <h1>Инструкция по подключению</h1>

      <div className="features">
         <div className="feature">1. Установите виджет в аккаунте amoCRM</div>
        <div className="feature">2. Авторизуйся в Corsa</div>
        <div className="feature">3. Выбери каналы связи</div>
        <div className="feature">4. Выбери тарифный план и тестируй в течении 3 дней</div>
      </div>

      <SupportSection />
    </Layout>
  )
}

function Privacy() {
  return (
    <Layout>
      <h1>Политика конфиденциальности и реквизиты</h1>

      <div className="features">
        <div className="feature">
          <strong>Политика конфиденциальности:</strong> Мы не передаём персональные данные третьим лицам. Данные используются исключительно для работы интеграции.
        </div>
        <div className="feature">
          Хранятся только OAuth токены и ID чатов Мессенджеров.
        </div>
        <div className="feature"><strong>Название:</strong>"Corsa Messenger"</div>
        <div className="feature"><strong>ИНН:</strong> 7701234567</div>
        <div className="feature"><strong>Email:</strong> Corsa.integration@yandex.ru</div>
      </div>

      <SupportSection />
    </Layout>
  )
}


function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  
  if (loading) {
    return <div className="loading">Загрузка...</div>
  }
  
  return isAuthenticated ? children : <Navigate to="/auth" />
}

function AppRoutes() {
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <div className="app">
        <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <p>Загрузка...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
      <Route path="/auth" element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Layout>
            <DashboardPage />
          </Layout>
        </PrivateRoute>
      } />
    </Routes>
  )
}

function App() {
  return <AppRoutes />
}

export default App