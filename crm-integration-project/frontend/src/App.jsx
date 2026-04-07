import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import './App.css'
import logo from './assets/logo.png'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'

function Layout({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="app">
      <header className="header">
        <h2>Corsa Messanger Integrator</h2>

        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/setup" 
            className={`nav-link ${isActive('/setup') ? 'active' : ''}`}
          >
            Настройка
          </Link>
          <Link 
            to="/privacy" 
            className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}
          >
            Политика
          </Link>
          <Link 
            to="/requisites" 
            className={`nav-link ${isActive('/requisites') ? 'active' : ''}`}
          >
            Реквизиты
          </Link>
          <Link 
            to="/auth" 
            className={`nav-link ${isActive('/auth') || isActive('/dashboard') ? 'active' : ''}`}
          >
            {isAuthenticated ? 'Личный кабинет' : 'Авторизация'}
          </Link>
        </nav>
      </header>

      <div className="content">{children}</div>

      <footer className="footer">
        © 2026 Corsa Messanger Integrator. All rights reserved.
      </footer>
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <h1>Интеграция Telegram ↔ amoCrm</h1>
      
      <div className="logo-wrap">
        <img src={logo} alt="Corsa Messenger Integrator" />
      </div>

      <p className="description">
        Безопасная интеграция для обмена сообщениями между Telegram и CRM системой.
      </p>
      
      <Link to="/auth" className="btn-support">Начать работу</Link>
    </Layout>
  )
}

function Setup() {
  return (
    <Layout>
      <h1>Инструкция по подключению</h1>

      <div className="features">
        <div className="feature">1. Установите виджет в аккаунте amoCRM</div>
        <div className="feature">2. Нажмите "Подключить"</div>
        <div className="feature">3. Авторизуйтесь через OAuth</div>
        <div className="feature">4. Добавьте Telegram chat ID</div>
      </div>

      <a href="https://corsahelp.netlify.app" className="btn-support">Техническая поддержка</a>
    </Layout>
  )
}

function Privacy() {
  return (
    <Layout>
      <h1>Политика конфиденциальности</h1>

      <div className="features">
        <div className="feature">
          Мы не передаём персональные данные третьим лицам. Данные используются исключительно для работы интеграции.
        </div>
        <div className="feature">
          Хранятся только OAuth токены и ID чатов Telegram.
        </div>
      </div>

      <a href="https://corsahelp.netlify.app" className="btn-support">Техническая поддержка</a>
    </Layout>
  )
}

function Requisites() {
  return (
    <Layout>
      <h1>Реквизиты организации</h1>

      <div className="features">
        <div className="feature"><strong>Название:</strong> ООО "Corsa Messenger"</div>
        <div className="feature"><strong>ИНН:</strong> 7701234567</div>
        <div className="feature"><strong>ОГРН:</strong> 1234567890123</div>
        <div className="feature"><strong>Email:</strong> support@corsa-messenger.com</div>
      </div>

      <a href="https://corsahelp.netlify.app" className="btn-support">Техническая поддержка</a>
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
  const { loading } = useAuth()

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
      <Route path="/setup" element={<Setup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/requisites" element={<Requisites />} />
      <Route path="/auth" element={<AuthPage />} />
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