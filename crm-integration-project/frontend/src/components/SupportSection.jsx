import React, { useState } from 'react';
import './SupportSection.css';

function SupportSection() {
  const [showModal, setShowModal] = useState(false);

  const handleTechSupport = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="support-section">
        <div className="support-container">
          <button className="support-btn" onClick={handleTechSupport}>
            Техническая поддержка
          </button>
          
          <div className="social-icons">
            <a 
              href="https://t.me/corsa_sup" 
              className="icon-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Telegram поддержка"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.09-.04-.13-.05-.04-.13-.02-.18-.01-.08.02-1.32.84-3.73 2.47-.35.24-.67.36-.96.35-.32-.01-.93-.18-1.38-.33-.56-.18-1-.28-.96-.6.02-.17.25-.34.69-.51 2.7-1.18 4.56-1.96 5.59-2.33 2.66-1.01 3.21-1.18 3.57-1.19.08 0 .26.02.38.13.1.09.13.21.14.33-.01.1-.05.26-.09.44z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:Corsa.integration@yandex.ru" 
              className="icon-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Написать письмо"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="support-modal">
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            <h2>Техническая поддержка</h2>
            <p className="modal-description">Выберите удобный способ связи</p>

            <div className="modal-contacts">
              <a 
                href="https://t.me/corsa_sup" 
                className="contact-card telegram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.09-.04-.13-.05-.04-.13-.02-.18-.01-.08.02-1.32.84-3.73 2.47-.35.24-.67.36-.96.35-.32-.01-.93-.18-1.38-.33-.56-.18-1-.28-.96-.6.02-.17.25-.34.69-.51 2.7-1.18 4.56-1.96 5.59-2.33 2.66-1.01 3.21-1.18 3.57-1.19.08 0 .26.02.38.13.1.09.13.21.14.33-.01.1-.05.26-.09.44z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Telegram</h3>
                  <p>@corsa_sup</p>
                  <span className="contact-link">Перейти в чат →</span>
                </div>
              </a>

              <a 
                href="mailto:Corsa.integration@yandex.ru" 
                className="contact-card email"
              >
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <p>Corsa.integration@yandex.ru</p>
                  <span className="contact-link">Отправить письмо →</span>
                </div>
              </a>
            </div>

          </div>
        </>
      )}
    </>
  );
}

export default SupportSection;
