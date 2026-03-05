import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './assets/logo.png'

function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <h2>Corsa Messanger Integrator</h2>

        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/setup" className="nav-link">Настройка</Link>
          <Link to="/privacy" className="nav-link">Политика</Link>
          <Link to="/requisites" className="nav-link">Реквизиты</Link>
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
      <h1>Интеграция Telegram ↔ amoCRM</h1>
      
      <div className="logo-wrap">
        <img src={logo} alt="Corsa Messenger Integrator" />
      </div>

      <p className="description">
        Безопасная интеграция для обмена сообщениями между Telegram
        и CRM системой.
      </p>
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
        <div className="feature"><strong>Название:</strong> ООО "CRM Integration"</div>
        <div className="feature"><strong>ИНН:</strong> 0000000000</div>
        <div className="feature"><strong>ОГРН:</strong> 0000000000000</div>
        <div className="feature"><strong>Email:</strong> support@example.com</div>
      </div>

      <a href="https://corsahelp.netlify.app" className="btn-support">Техническая поддержка</a>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/requisites" element={<Requisites />} />
    </Routes>
  )
}

export default App