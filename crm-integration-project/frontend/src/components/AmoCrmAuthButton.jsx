import React, { useEffect, useRef } from 'react';

const AmoCrmAuthButton = ({ 
  clientId = '7c0980eb-1e92-4101-a202-b5edb4566fb6', // Твой CLIENT_ID
  title = 'Подключить amoCRM',
  compact = false,
  color = 'default', // 'default', 'blue', 'green', 'red'
  mode = 'popup',    // 'popup' или 'redirect'
  onSuccess,         // Callback при успешной авторизации
  onError            // Callback при ошибке
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Загружаем скрипт кнопки, если ещё не загружен
    if (!document.querySelector('script[src*="amocrm.ru/auth/button.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.amocrm.ru/auth/button.min.js';
      script.charset = 'utf-8';
      script.async = true;
      document.body.appendChild(script);
    }

    // Глобальные колбэки для обработки событий
    window.amoOAuthSuccess = (data) => {
      console.log('✅ amoCRM OAuth success:', data);
      if (onSuccess) onSuccess(data);
      // Перезагружаем данные или страницу
      window.location.reload();
    };

    window.amoOAuthError = (error) => {
      console.error('❌ amoCRM OAuth error:', error);
      if (onError) onError(error);
    };

    return () => {
      // Очистка (опционально)
      delete window.amoOAuthSuccess;
      delete window.amoOAuthError;
    };
  }, [onSuccess, onError]);

  return (
    <div ref={containerRef}>
      <script
        className="amocrm_oauth"
        charset="utf-8"
        data-client-id={clientId}
        data-title={title}
        data-compact={String(compact)}
        data-color={color}
        data-mode={mode}
        // 🔥 Важно: redirect_uri должен совпадать с тем, что в .env и amoCRM!
        data-redirect-uri="https://corsa-crm.ru/api/auth/callback"
        data-state={JSON.stringify({ ts: Date.now() })}
        data-error-callback="amoOAuthError"
        src="https://www.amocrm.ru/auth/button.min.js"
      />
    </div>
  );
};

export default AmoCrmAuthButton;