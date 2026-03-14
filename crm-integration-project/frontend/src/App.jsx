import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './assets/logo.png'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'

/* ============================================================
<<<<<<< HEAD
   КОМПОНЕНТ КНОПКИ AUTH (amoCRM OAuth)
=======
   КОМПОНЕНТ КНОПКИ AUTH (встроенный)
>>>>>>> 42af9a5 (Много что поменялось)
============================================================ */
function AmoCrmAuthButton({ onSuccess, onError }) {
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
    // Глобальные колбэки для обработки событий amoCRM OAuth
=======
    // Загружаем скрипт кнопки amoCRM, если ещё не загружен
    const scriptId = 'amocrm-auth-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.amocrm.ru/auth/button.min.js';
      script.charset = 'utf-8';
      script.async = true;
      script.className = 'amocrm_oauth';
      script.setAttribute('data-client-id', '7c0980eb-1e92-4101-a202-b5edb4566fb6');
      script.setAttribute('data-title', 'Подключить amoCRM');
      script.setAttribute('data-compact', 'false');
      script.setAttribute('data-color', 'blue');
      script.setAttribute('data-mode', 'popup');
      script.setAttribute('data-redirect-uri', 'https://corsa-crm.ru/api/auth/callback');
      script.setAttribute('data-error-callback', 'amoOAuthError');
      document.body.appendChild(script);
    }

    // Глобальные колбэки для обработки событий
>>>>>>> 42af9a5 (Много что поменялось)
    window.amoOAuthSuccess = (data) => {
      console.log('✅ amoCRM OAuth success:', data);
      if (onSuccess) onSuccess(data);
    };

    window.amoOAuthError = (error) => {
      console.error('❌ amoCRM OAuth error:', error);
      if (onError) onError(error);
    };

<<<<<<< HEAD
    // 🔥 Динамически создаём и добавляем скрипт кнопки
    const script = document.createElement('script');
    script.className = 'amocrm_oauth';
    script.charset = 'utf-8';
    script.src = 'https://www.amocrm.ru/auth/button.min.js';
    script.async = true;
    script.setAttribute('data-client-id', '7c0980eb-1e92-4101-a202-b5edb4566fb6');
    script.setAttribute('data-title', 'Подключить amoCRM');
    script.setAttribute('data-compact', 'false');
    script.setAttribute('data-color', 'blue');
    script.setAttribute('data-mode', 'popup');
    script.setAttribute('data-redirect-uri', 'https://corsa-crm.ru/api/auth/callback');
    script.setAttribute('data-error-callback', 'amoOAuthError');

    // Добавляем скрипт в DOM
    document.body.appendChild(script);

    return () => {
      // Очистка при размонтировании
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
=======
    return () => {
      // Очистка (опционально)
>>>>>>> 42af9a5 (Много что поменялось)
      delete window.amoOAuthSuccess;
      delete window.amoOAuthError;
    };
  }, [onSuccess, onError, navigate]);

<<<<<<< HEAD
  // Контейнер, куда amoCRM вставит кнопку
  return (
    <div 
      className="amocrm_oauth"
      data-client-id="7c0980eb-1e92-4101-a202-b5edb4566fb6"
      data-title="Подключить amoCRM"
      data-compact="false"
      data-color="blue"
      data-mode="popup"
      data-redirect-uri="https://corsa-crm.ru/api/auth/callback"
      data-error-callback="amoOAuthError"
      style={{
        display: 'inline-block',
        margin: '20px 0'
      }}
    />
  );
}

/* ============================================================
   КОМПОНЕНТ КНОПКИ VK (Стиль VK)
============================================================ */
function VKAuthButton({ onSuccess, onError }) {
  const handleVKLogin = () => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    const popup = window.open(
      '/api/auth/vk',
      'VK Auth',
      `width=${width},height=${height},left=${left},top=${top}`
    );
    
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        if (onSuccess) onSuccess();
      }
    }, 500);
  };
  
  return (
    <button 
      onClick={handleVKLogin}
      className="btn-vk-auth"
      style={{
        display: 'inline-block',
        padding: '14px 32px',
        background: 'linear-gradient(135deg, #0077FF 0%, #0055CC 100%)',
        color: 'white',
        borderRadius: '50px',
        border: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        cursor: 'pointer',
        marginTop: '15px',
        boxShadow: '0 8px 24px rgba(0, 119, 255, 0.3)',
        transition: 'all 0.22s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 14px 36px rgba(0, 119, 255, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 8px 24px rgba(0, 119, 255, 0.3)';
      }}
    >
      💬 Подключить ВКонтакте
    </button>
  );
}

/* ============================================================
   КОМПОНЕНТ КНОПКИ TELEGRAM (Стиль Telegram)
============================================================ */
function TelegramAuthButton({ onSuccess, onError }) {
  const handleTelegramLogin = () => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    const popup = window.open(
      '/api/auth/telegram',
      'Telegram Auth',
      `width=${width},height=${height},left=${left},top=${top}`
    );
    
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        if (onSuccess) onSuccess();
      }
    }, 500);
  };
  
  return (
    <button 
      onClick={handleTelegramLogin}
      className="btn-telegram-auth"
      style={{
        display: 'inline-block',
        padding: '14px 32px',
        background: 'linear-gradient(135deg, #24A1DE 0%, #1B7FAD 100%)',
        color: 'white',
        borderRadius: '50px',
        border: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        cursor: 'pointer',
        marginTop: '15px',
        boxShadow: '0 8px 24px rgba(36, 161, 222, 0.3)',
        transition: 'all 0.22s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 14px 36px rgba(36, 161, 222, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 8px 24px rgba(36, 161, 222, 0.3)';
      }}
    >
      ✈️ Подключить Telegram
    </button>
=======
  return (
    <div className="amo-auth-wrapper">
      <script
        className="amocrm_oauth"
        charset="utf-8"
        data-client-id="7c0980eb-1e92-4101-a202-b5edb4566fb6"
        data-title="Подключить amoCRM"
        data-compact="false"
        data-color="blue"
        data-mode="popup"
        data-redirect-uri="https://corsa-crm.ru/api/auth/callback"
        data-error-callback="amoOAuthError"
        src="https://www.amocrm.ru/auth/button.min.js"
      />
    </div>
>>>>>>> 42af9a5 (Много что поменялось)
  );
}

/* ============================================================
   LAYOUT
============================================================ */
function Layout({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="app">
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
        © 2026 Corsa Messenger Integrator. All rights reserved.
      </footer>
    </div>
  )
}

/* ============================================================
<<<<<<< HEAD
   HOME (с кнопками авторизации — Telegram, amoCRM, VK)
============================================================ */
function Home() {
  // Обработка успешной авторизации
  const handleTelegramSuccess = () => {
    console.log('🎉 Telegram авторизация прошла успешно!');
    alert('✅ Telegram успешно подключён!');
  };

  const handleAmoSuccess = (data) => {
    console.log('🎉 amoCRM авторизация прошла успешно!', data);
    alert('✅ amoCRM успешно подключён!');
  };

  const handleVkSuccess = () => {
    console.log('🎉 VK авторизация прошла успешно!');
    alert('✅ ВКонтакте успешно подключён!');
  };

=======
   HOME (с кнопкой авторизации)
============================================================ */
function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const SUBDOMAIN = 'podshivalovvfyodor'; // Твой субдомен

  // Проверка статуса авторизации при загрузке
  useEffect(() => {
    checkAuthStatus();
    
    // Слушаем сообщение от окна авторизации (postMessage)
    const handleMessage = (event) => {
      if (event.data?.type === 'AUTH_SUCCESS') {
        console.log('📨 Received AUTH_SUCCESS message');
        checkAuthStatus();
      }
    };
    window.addEventListener('message', handleMessage);
    
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/auth/status?subdomain=${SUBDOMAIN}`);
      const data = await response.json();
      setIsConnected(data.authorized);
      setError(null);
    } catch (err) {
      console.error('Auth check failed:', err);
      setError('Не удалось проверить статус подключения');
    } finally {
      setLoading(false);
    }
  };

  const handleAuthSuccess = (data) => {
    console.log('🎉 Авторизация прошла успешно!', data);
    // После успеха — проверяем статус и обновляем UI
    checkAuthStatus();
  };

  const handleAuthError = (error) => {
    console.error('❌ Ошибка авторизации:', error);
    setError('Не удалось подключиться к amoCRM. Попробуйте ещё раз.');
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: SUBDOMAIN })
      });
      setIsConnected(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading">Проверка подключения...</div>
      </Layout>
    );
  }

>>>>>>> 42af9a5 (Много что поменялось)
  return (
    <Layout>
      <h1>Интеграция Telegram ↔ amoCrm</h1>
      
      <div className="logo-wrap">
        <img src={logo} alt="Corsa Messenger Integrator" />
      </div>

      <p className="description">
        Безопасная интеграция для обмена сообщениями между Telegram и CRM системой.
      </p>

      {/* Блок Telegram */}
      <div className="auth-section">
        <h3 style={{ marginBottom: '15px', color: '#24A1DE' }}>✈️ Telegram</h3>
        <div className="not-connected-box" style={{ borderColor: '#24A1DE' }}>
          <h3>🔌 Подключите Telegram</h3>
          <p>Авторизуйтесь для получения уведомлений и сообщений</p>
          <TelegramAuthButton onSuccess={handleTelegramSuccess} />
        </div>
      </div>

      {/* Блок amoCRM */}
      <div className="auth-section">
        <h3 style={{ marginBottom: '15px', color: '#0044FF' }}>🦀 amoCRM</h3>
        <div className="not-connected-box">
          <h3>🔌 Подключите amoCRM для начала работы</h3>
          <p>Нажмите на кнопку ниже и авторизуйтесь в вашем аккаунте</p>
          <AmoCrmAuthButton 
            onSuccess={handleAmoSuccess}
            onError={() => {}}
          />
        </div>
      </div>

      {/* Блок VK */}
      <div className="auth-section">
        <h3 style={{ marginBottom: '15px', color: '#0077FF' }}>💬 ВКонтакте</h3>
        <div className="not-connected-box" style={{ borderColor: '#0077FF' }}>
          <h3>🔌 Подключите ВКонтакте</h3>
          <p>Авторизуйтесь для получения сообщений из VK</p>
          <VKAuthButton onSuccess={handleVkSuccess} />
        </div>
      </div>

      {/* Дополнительные ссылки */}
      <div className="links-section">
        <Link to="/setup" className="btn-secondary">
          📋 Инструкция по настройке
        </Link>
        <a href="https://corsahelp.netlify.app" className="btn-support" target="_blank" rel="noopener noreferrer">
          💬 Техническая поддержка
        </a>
      </div>
    </Layout>
  )
}

/* ============================================================
<<<<<<< HEAD
   SETUP (с инструкциями для всех платформ)
=======
   SETUP
>>>>>>> 42af9a5 (Много что поменялось)
============================================================ */
function Setup() {
  return (
    <Layout>
      <h1>Инструкция по подключению</h1>

      {/* Telegram */}
      <div className="setup-section">
        <h2 className="setup-title" style={{ color: '#24A1DE', borderBottomColor: '#24A1DE' }}>✈️ Telegram</h2>
        <div className="features">
          <div className="feature" style={{ borderLeftColor: '#24A1DE' }}>1. Нажмите кнопку "Подключить Telegram"</div>
          <div className="feature" style={{ borderLeftColor: '#24A1DE' }}>2. Авторизуйтесь через Telegram</div>
          <div className="feature" style={{ borderLeftColor: '#24A1DE' }}>3. Разрешите доступ к уведомлениям</div>
          <div className="feature" style={{ borderLeftColor: '#24A1DE' }}>4. Настройте правила получения сообщений</div>
        </div>
      </div>

<<<<<<< HEAD
      {/* amoCRM */}
      <div className="setup-section">
        <h2 className="setup-title">🦀 amoCRM</h2>
        <div className="features">
          <div className="feature">1. Установите виджет в аккаунте amoCRM</div>
          <div className="feature">2. Нажмите "Подключить"</div>
          <div className="feature">3. Авторизуйтесь через OAuth</div>
          <div className="feature">4. Добавьте Telegram chat ID</div>
        </div>
      </div>

      {/* VK */}
      <div className="setup-section">
        <h2 className="setup-title" style={{ color: '#0077FF', borderBottomColor: '#0077FF' }}>💬 ВКонтакте</h2>
        <div className="features">
          <div className="feature" style={{ borderLeftColor: '#0077FF' }}>1. Нажмите кнопку "Подключить ВКонтакте"</div>
          <div className="feature" style={{ borderLeftColor: '#0077FF' }}>2. Разрешите доступ к сообщениям и группам</div>
          <div className="feature" style={{ borderLeftColor: '#0077FF' }}>3. Выберите сообщества для интеграции</div>
          <div className="feature" style={{ borderLeftColor: '#0077FF' }}>4. Настройте правила обработки сообщений</div>
        </div>
      </div>

=======
>>>>>>> 42af9a5 (Много что поменялось)
      <a href="https://corsahelp.netlify.app" className="btn-support" target="_blank" rel="noopener noreferrer">Техническая поддержка</a>
    </Layout>
  )
}

/* ============================================================
   PRIVACY
============================================================ */
function Privacy() {
  return (
    <Layout>
      <h1>Политика конфиденциальности</h1>

      <div className="features">
        <div className="feature">
          <h3>1. Общие положения</h3>
          <p>
            Настоящая Политика обработки персональных данных разработана в соответствии 
            с Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных».
          </p>
          <p>
            Политика определяет порядок обработки и меры по обеспечению безопасности 
            персональных данных, обрабатываемых в рамках сервиса интеграции 
            мессенджеров и социальных сетей с CRM-системами.
          </p>
          <p><b>Оператор персональных данных:</b></p>
          <p>
            Михаил Подшивалов Александрович <br/>
            Статус: Самозанятый (НПД) <br/>
            ИНН: 772459304667 <br/>
            Email: Corsa.integration@yandex.ru <br/>
            Телефон: 89771268246
          </p>
          <p>
            Оператор осуществляет деятельность по разработке и предоставлению 
            программного обеспечения для интеграции CRM-систем с социальными 
            сетями и мессенджерами.
          </p>
        </div>

        <div className="feature">
          <h3>2. Цели обработки персональных данных</h3>
          <ul>
            <li>подключение и настройка интеграции с CRM-системами (включая amoCRM)</li>
            <li>интеграция с социальными сетями (VK, Instagram и др.)</li>
            <li>передача сообщений клиентов в CRM</li>
            <li>создание контактов и сделок в CRM</li>
            <li>техническая поддержка пользователей</li>
            <li>выполнение договорных обязательств</li>
            <li>обеспечение безопасности сервиса</li>
          </ul>
        </div>

        <div className="feature">
          <h3>3. Состав обрабатываемых данных</h3>
          <ul>
            <li>имя и фамилия клиента</li>
            <li>номер телефона</li>
            <li>адрес электронной почты</li>
            <li>ссылки на профили в социальных сетях</li>
            <li>содержание сообщений</li>
            <li>технические данные (IP-адрес, браузер)</li>
            <li>данные авторизации API</li>
          </ul>
          <p>
            Оператор не обрабатывает специальные категории персональных данных 
            и биометрические данные.
          </p>
        </div>

        <div className="feature">
          <h3>4. Принципы обработки</h3>
          <ul>
            <li>законность</li>
            <li>минимизация объема данных</li>
            <li>ограничение сроков хранения</li>
            <li>обеспечение конфиденциальности</li>
            <li>недопущение избыточной обработки</li>
          </ul>
        </div>

        <div className="feature">
          <h3>5. Условия обработки</h3>
          <ul>
            <li>с согласия субъекта персональных данных</li>
            <li>в рамках исполнения договора</li>
            <li>при выполнении требований законодательства РФ</li>
          </ul>
        </div>

        <div className="feature">
          <h3>6. Передача персональных данных</h3>
          <ul>
            <li>CRM-системам (например amoCRM)</li>
            <li>социальным сетям и мессенджерам</li>
            <li>хостинг-провайдерам</li>
            <li>облачным сервисам хранения данных</li>
          </ul>
          <p>
            Трансграничная передача возможна при использовании зарубежных сервисов 
            и осуществляется при наличии согласия субъекта данных.
          </p>
        </div>

        <div className="feature">
          <h3>7. Права субъекта персональных данных</h3>
          <ul>
            <li>получать информацию о своих данных</li>
            <li>требовать их уточнения</li>
            <li>требовать блокирования или удаления</li>
            <li>отозвать согласие на обработку</li>
            <li>обжаловать действия оператора в Роскомнадзоре или суде</li>
          </ul>
        </div>

        <div className="feature">
          <h3>8. Обеспечение безопасности</h3>
          <ul>
            <li>использование HTTPS</li>
            <li>ограничение доступа к серверам</li>
            <li>хранение токенов в зашифрованном виде</li>
            <li>регулярные обновления ПО</li>
            <li>резервное копирование данных</li>
          </ul>
        </div>

        <div className="feature">
          <h3>9. Срок хранения данных</h3>
          <p>
            Персональные данные хранятся не дольше, чем это требуется для достижения 
            целей обработки либо до отзыва согласия субъектом персональных данных.
          </p>
        </div>

        <div className="feature">
          <h3>10. Заключительные положения</h3>
          <p>
            Настоящая политика размещается в свободном доступе на сайте оператора.
          </p>
          <p>
            Оператор вправе вносить изменения в политику. 
            Актуальная версия всегда доступна на сайте.
          </p>
        </div>
      </div>

      <a href="https://corsahelp.netlify.app" className="btn-support" target="_blank" rel="noopener noreferrer">Техническая поддержка</a>
    </Layout>
  )
}

/* ============================================================
   REQUISITES
============================================================ */
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

      <a href="https://corsahelp.netlify.app" className="btn-support" target="_blank" rel="noopener noreferrer">Техническая поддержка</a>
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