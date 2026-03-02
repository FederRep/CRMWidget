import { useState } from 'react'

function App() {
  const [subdomain, setSubdomain] = useState('')
  const [message, setMessage] = useState('')

  const connectAmo = () => {
    if (!subdomain) {
      setMessage('Введите субдомен')
      return
    }

    window.open(
      `http://localhost:3000/oauth?subdomain=${subdomain}`,
      'amoOAuth',
      'width=600,height=600'
    )
  }

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>CRM Integration Dashboard</h1>

      <div style={{ marginTop: 30 }}>
        <h3>Подключить amoCRM</h3>

        <input
          placeholder="Введите субдомен (без .amocrm.ru)"
          value={subdomain}
          onChange={e => setSubdomain(e.target.value)}
          style={{
            padding: 10,
            width: 300,
            marginRight: 10
          }}
        />

        <button
          onClick={connectAmo}
          style={{
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          Подключить
        </button>

        {message && (
          <p style={{ color: 'red', marginTop: 10 }}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default App