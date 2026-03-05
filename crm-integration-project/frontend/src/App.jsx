import { Routes, Route, Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2 style={{ margin: 0 }}>CRM Telegram Integration</h2>

        <nav style={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/setup">Настройка</Link>
          <Link to="/privacy">Политика</Link>
          <Link to="/requisites">Реквизиты</Link>
        </nav>
      </header>

      <div style={styles.content}>{children}</div>

      <footer style={styles.footer}>
        © 2026 CRM Integration. All rights reserved.
      </footer>
    </div>
  )
}

/* ===========================
   PAGES
=========================== */

function Home() {
  return (
    <Layout>
      <h1>Интеграция Telegram ↔ amoCRM</h1>
      <p>
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

      <ol>
        <li>Установите виджет в аккаунте amoCRM</li>
        <li>Нажмите "Подключить"</li>
        <li>Авторизуйтесь через OAuth</li>
        <li>Добавьте Telegram chat ID</li>
      </ol>
    </Layout>
  )
}

function Privacy() {
  return (
    <Layout>
      <h1>Политика конфиденциальности</h1>
      <p>
        Мы не передаём персональные данные третьим лицам.
        Данные используются исключительно для работы интеграции.
      </p>
      <p>
        Хранятся только OAuth токены и ID чатов Telegram.
      </p>
    </Layout>
  )
}

function Requisites() {
  return (
    <Layout>
      <h1>Реквизиты организации</h1>

      <p><strong>Название:</strong> ООО "CRM Integration"</p>
      <p><strong>ИНН:</strong> 0000000000</p>
      <p><strong>ОГРН:</strong> 0000000000000</p>
      <p><strong>Email:</strong> support@example.com</p>
    </Layout>
  )
}

/* ===========================
   ROUTER
=========================== */

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

/* ===========================
   STYLES
=========================== */

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Inter, sans-serif',
    background: '#f5f7fa'
  },
  header: {
    background: '#fff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
  },
  nav: {
    display: 'flex',
    gap: 20
  },
  content: {
    flex: 1,
    padding: 60,
    maxWidth: 900
  },
  footer: {
    background: '#fff',
    padding: 20,
    textAlign: 'center',
    borderTop: '1px solid #eee'
  }
}

export default App