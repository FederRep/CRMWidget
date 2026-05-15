import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useTheme } from '../ThemeContext';
import './DashboardPage.css';

import telegaIcon from '../icons/t.svg';
import whatsappIcon from '../icons/w.svg';
import vkIcon from '../icons/v.svg';
import linkedinIcon from '../icons/l.svg';
import defaultIcon from '../icons/d.svg';
import acceptIcon from '../icons/accept.svg';

const IconImage = ({ src, alt, className, size = 24 }) => (
  <img src={src} alt={alt} className={className} style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }} />
);


// ===== 2. Вкладка Подписки (с иконками) =====
function SubscriptionsTab({ integrations }) {
  const getTypeIcon = (type) => {
    const icons = { Telegram: telegaIcon, WhatsApp: whatsappIcon, VKontakte: vkIcon, MAX: defaultIcon, Instagram: defaultIcon, Avito: defaultIcon };
    return icons[type] || defaultIcon;
  };
  const getStatusText = (status) => ({ active: 'Активна', expired: 'Истекла', pending: 'На рассмотрении' }[status] || 'Неизвестно');
  const getStatusClass = (status) => ({ active: 'subscription-active', expired: 'subscription-expired', pending: 'subscription-pending' }[status] || '');
  const getTariffName = (tariff) => ({ lite: 'Lite', pro: 'Pro', max: 'MAX' }[tariff] || 'Lite');

  return (
    <div className="dashboard-section">
      <div className="section-header"><h3>Управление подписками</h3></div>
      {integrations.length === 0 ? <div className="empty-state"><p>Нет активных подписок</p></div> : (
        <div className="subscriptions-table">
          <div className="table-header"><div className="col-integration">Интеграция</div><div className="col-tariff">Тариф</div><div className="col-status">Статус</div><div className="col-date">Дата окончания</div></div>
          {integrations.map(integration => (
            <div key={integration.id} className="table-row">
              <div className="col-integration">
                <IconImage src={getTypeIcon(integration.type)} alt={integration.type} size={20} />
                <span className="integration-name">{integration.name}</span>
              </div>
              <div className="col-tariff"><span className="tariff-badge">{getTariffName(integration.tariff)}</span></div>
              <div className="col-status"><span className={`subscription-status ${getStatusClass(integration.subscriptionStatus)}`}>{getStatusText(integration.subscriptionStatus)}</span></div>
              <div className="col-date">{integration.endDate || 'Не указана'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ===== 3. Вкладка Интеграции (с функцией назначения ролей) =====
function IntegrationsTab({ user, integrations, employees, updateEmployeeRoles, showMessage, setIntegrations, openAddModalFromPricing, preselectedTariff, setOpenAddModalFromPricing }) {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [assignments, setAssignments] = useState({});
  const [addIntegrationModalOpen, setAddIntegrationModalOpen] = useState(false);
  const [addModalTab, setAddModalTab] = useState('single');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [singleIntegration, setSingleIntegration] = useState({ type: '', tariff: '' });
  const [multipleIntegrations, setMultipleIntegrations] = useState([{ id: 1, type: '', tariff: '' }]);
  const [telegramSetupOpen, setTelegramSetupOpen] = useState(false);
  const [telegramConnected, setTelegramConnected] = useState(false);
  const [telegramSubdomain, setTelegramSubdomain] = useState(
    localStorage.getItem('telegram_subdomain') || user?.amo_subdomain || ''
  );
  const [telegramQr, setTelegramQr] = useState(null);
  const [telegramSessionId, setTelegramSessionId] = useState(null);
  const [telegramStatus, setTelegramStatus] = useState('');
  const [telegramConnecting, setTelegramConnecting] = useState(false);
  const [telegramPasswordNeeded, setTelegramPasswordNeeded] = useState(false);
  const [telegramPassword, setTelegramPassword] = useState('');
  const [telegramPasswordSubmitting, setTelegramPasswordSubmitting] = useState(false);
  const [telegramPasswordHint, setTelegramPasswordHint] = useState('');

  // Handle opening modal from PricingPage
  useEffect(() => {
    if (openAddModalFromPricing) {
      setAddIntegrationModalOpen(true);
      setAddModalTab('single');
      setBillingCycle('monthly');
      setSingleIntegration({ type: '', tariff: preselectedTariff || '' });
      setMultipleIntegrations([{ id: 1, type: '', tariff: preselectedTariff || '' }]);
      setOpenAddModalFromPricing(false);
    }
  }, [openAddModalFromPricing, preselectedTariff, setOpenAddModalFromPricing]);

  const rolesOptions = [
    { id: 'analyst', name: 'Аналитик' },
    { id: 'manager', name: 'Менеджер' },
    { id: 'director', name: 'Руководитель' },
  ];

  const integrationTypes = [
    { id: 'Telegram', name: 'Telegram' },
    { id: 'MAX', name: 'MAX' },
    { id: 'Instagram', name: 'Instagram' },
    { id: 'Avito', name: 'Avito' },
    { id: 'VKontakte', name: 'VKontakte' },
    { id: 'WhatsApp', name: 'WhatsApp' },
  ];

  const tariffOptions = [
    {
      id: 'lite',
      name: 'Lite',
      pricing: {
        monthly: { price: 720, period: 'месяц' },
        '6months': { price: 649, period: 'месяц (скидка 10%)', original: 720 },
        '12months': { price: 579, period: 'месяц (скидка 20%)', original: 720 },
      },
    },
    {
      id: 'pro',
      name: 'Pro',
      pricing: {
        monthly: { price: 1140, period: 'месяц' },
        '6months': { price: 1026, period: 'месяц (скидка 10%)', original: 1140 },
        '12months': { price: 912, period: 'месяц (скидка 20%)', original: 1140 },
      },
    },
    {
      id: 'max',
      name: 'MAX',
      pricing: {
        monthly: { price: 2899, period: 'месяц' },
        '6months': { price: 2609, period: 'месяц (скидка 10%)', original: 2899 },
        '12months': { price: 2319, period: 'месяц (скидка 20%)', original: 2899 },
      },
    },
  ];

  useEffect(() => {
    if (!telegramSubdomain) return;
    localStorage.setItem('telegram_subdomain', telegramSubdomain);
  }, [telegramSubdomain]);

  useEffect(() => {
    if (!telegramSessionId) return undefined;

    const pollId = setInterval(async () => {
      try {
        const statusRes = await fetch(`/api/auth/telegram/device/${telegramSessionId}`);
        const statusData = await statusRes.json();

        if (statusData.status === 'authorized') {
          setTelegramStatus('Подключено. Telegram аккаунт авторизован ✅');
          setTelegramConnected(true);
          setTelegramConnecting(false);
          setTelegramPasswordNeeded(false);
          setTelegramPassword('');
          clearInterval(pollId);
        } else if (statusData.status === 'password_needed') {
          setTelegramPasswordNeeded(true);
          setTelegramPasswordHint(statusData.passwordHint || '');
          setTelegramStatus('Введите облачный пароль Telegram (2FA), если включен.');
        } else if (statusData.status === 'pending_scan') {
          if (statusData.qrImage) setTelegramQr(statusData.qrImage);
          setTelegramStatus('Откройте Telegram → Настройки → Устройства → Связать устройство и сканируйте QR.');
        } else if (statusData.status === 'error') {
          setTelegramStatus(statusData.error || 'Ошибка подключения Telegram');
          setTelegramConnecting(false);
          setTelegramPasswordNeeded(false);
          clearInterval(pollId);
        } else {
          setTelegramStatus('Подключение...');
        }
      } catch (e) {
        setTelegramStatus('Ошибка проверки статуса QR-сессии');
      }
    }, 2500);

    return () => clearInterval(pollId);
  }, [telegramSessionId]);

  const handleGenerateTelegramQr = async () => {
    try {
      const sub = telegramSubdomain.trim().toLowerCase();
      if (!sub) {
        setTelegramStatus('Укажите поддомен amoCRM перед подключением Telegram.');
        return;
      }
      setTelegramConnecting(true);
      setTelegramStatus('Готовим QR...');
      setTelegramQr(null);
      setTelegramSessionId(null);
      setTelegramPasswordNeeded(false);
      setTelegramPassword('');
      setTelegramPasswordHint('');

      const response = await fetch('/api/auth/telegram/device/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: sub }),
      });
      const data = await response.json();

      if (!data.sessionId) {
        throw new Error(data.error || 'Не удалось запустить сессию');
      }

      setTelegramSessionId(data.sessionId);
      setTelegramStatus('Подключаемся к Telegram... QR появится через пару секунд.');
    } catch (error) {
      setTelegramConnecting(false);
      setTelegramStatus(error?.message || 'Не удалось создать QR. Проверьте backend.');
    }
  };

  const handleSubmitTelegramPassword = async () => {
    if (!telegramSessionId || !telegramPassword.trim()) return;
    setTelegramPasswordSubmitting(true);
    try {
      await fetch(`/api/auth/telegram/device/${telegramSessionId}/password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: telegramPassword.trim() }),
      });
      setTelegramPassword('');
      setTelegramPasswordNeeded(false);
      setTelegramStatus('Проверяем пароль...');
    } catch (e) {
      setTelegramStatus('Не удалось отправить пароль 2FA.');
    } finally {
      setTelegramPasswordSubmitting(false);
    }
  };

  const handleMessengerCardClick = (typeId) => {
    setSingleIntegration(prev => ({ ...prev, type: typeId }));
  };

  const handleOpenAddModal = () => {
    setAddIntegrationModalOpen(true);
    setAddModalTab('single');
    setBillingCycle('monthly');
    setSingleIntegration({ type: '', tariff: '' });
    setMultipleIntegrations([{ id: 1, type: '', tariff: '' }]);
    setTelegramConnected(false);
    setTelegramQr(null);
    setTelegramSessionId(null);
    setTelegramStatus('');
    setTelegramPasswordNeeded(false);
    setTelegramPassword('');
    setTelegramPasswordHint('');
  };

  const handleCloseAddModal = () => {
    setAddIntegrationModalOpen(false);
  };

  const handleSingleIntegrationChange = (field, value) => {
    setSingleIntegration(prev => ({ ...prev, [field]: value }));
    if (field === 'tariff' && value && singleIntegration.type === 'Telegram' && !telegramConnected) {
      setTelegramSetupOpen(true);
      setTelegramQr(null);
      setTelegramSessionId(null);
      setTelegramStatus('');
      setTelegramPasswordNeeded(false);
      setTelegramPassword('');
      setTelegramPasswordHint('');
      handleGenerateTelegramQr();
    }
  };

  const handleMultipleIntegrationChange = (id, field, value) => {
    setMultipleIntegrations(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
    if (!telegramConnected) {
      const item = multipleIntegrations.find(i => i.id === id);
      if (item) {
        const newType = field === 'type' ? value : item.type;
        const newTariff = field === 'tariff' ? value : item.tariff;
        if (newType === 'Telegram' && newTariff) {
          setTelegramSetupOpen(true);
          setTelegramQr(null);
          setTelegramSessionId(null);
          setTelegramStatus('');
          setTelegramPasswordNeeded(false);
          setTelegramPassword('');
          setTelegramPasswordHint('');
          handleGenerateTelegramQr();
        }
      }
    }
  };

  const addMultipleIntegrationRow = () => {
    setMultipleIntegrations(prev => [...prev, { id: Date.now(), type: '', tariff: '' }]);
  };

  const removeMultipleIntegrationRow = (id) => {
    if (multipleIntegrations.length > 1) {
      setMultipleIntegrations(prev => prev.filter(item => item.id !== id));
    }
  };

  const calculateTotalPrice = () => {
    const multiplier = billingCycle === 'monthly' ? 1 : billingCycle === '6months' ? 6 : 12;
    
    if (addModalTab === 'single') {
      const tariff = tariffOptions.find(t => t.id === singleIntegration.tariff);
      const priceData = tariff ? tariff.pricing[billingCycle] : null;
      return priceData ? priceData.price * multiplier : 0;
    } else {
      return multipleIntegrations.reduce((sum, item) => {
        const tariff = tariffOptions.find(t => t.id === item.tariff);
        const priceData = tariff ? tariff.pricing[billingCycle] : null;
        return sum + (priceData ? priceData.price * multiplier : 0);
      }, 0);
    }
  };

  const canShowPayButton = () => {
    const hasTelegramInMultiple = multipleIntegrations.some(item => item.type === 'Telegram' && item.tariff);
    if (addModalTab === 'single') {
      if (!singleIntegration.type || !singleIntegration.tariff) return false;
      if (singleIntegration.type === 'Telegram' && !telegramConnected) return false;
      return true;
    } else {
      if (!multipleIntegrations.every(item => item.type && item.tariff)) return false;
      if (hasTelegramInMultiple && !telegramConnected) return false;
      return true;
    }
  };

  const handlePay = () => {
    const newIntegrations = [];
    
    // Calculate end date based on billing cycle in Moscow timezone (UTC+3)
    const calculateEndDate = () => {
      const now = new Date();
      const moscowTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
      
      const monthsToAdd = billingCycle === 'monthly' ? 1 : billingCycle === '6months' ? 6 : 12;
      const endDate = new Date(moscowTime);
      endDate.setMonth(endDate.getMonth() + monthsToAdd);
      
      return endDate.toISOString().split('T')[0];
    };
    
    const endDate = calculateEndDate();

    if (addModalTab === 'single') {
      if (singleIntegration.type && singleIntegration.tariff) {
        newIntegrations.push({
          id: Date.now(),
          type: singleIntegration.type,
          name: singleIntegration.type === 'Telegram'
            ? 'Telegram аккаунт'
            : `${singleIntegration.type} канал`,
          status: 'active',
          subscriptionStatus: 'active',
          tariff: singleIntegration.tariff,
          channelsCount: 1,
          endDate: endDate,
          employeeRoles: {},
        });
      }
    } else {
      multipleIntegrations.forEach((item, index) => {
        if (item.type && item.tariff) {
          newIntegrations.push({
            id: Date.now() + index,
            type: item.type,
            name: item.type === 'Telegram'
              ? `Telegram аккаунт ${index + 1}`
              : `${item.type} канал ${index + 1}`,
            status: 'active',
            subscriptionStatus: 'active',
            tariff: item.tariff,
            channelsCount: 1,
            endDate: endDate,
            employeeRoles: {},
          });
        }
      });
    }

    if (newIntegrations.length > 0) {
      setIntegrations(prev => [...prev, ...newIntegrations]);
      showMessage(`${newIntegrations.length} интеграций добавлено`, 'success');
      setAddIntegrationModalOpen(false);
    }
  };

  const handleOpenModal = (integration) => {
    setSelectedIntegration(integration);
    setAssignments(integration.employeeRoles || {});
    setModalOpen(true);
  };

  const toggleRole = (empId, roleId) => {
    const currentRoles = assignments[empId] || [];
    const newRoles = currentRoles.includes(roleId)
      ? currentRoles.filter(r => r !== roleId)
      : [...currentRoles, roleId];
    setAssignments({ ...assignments, [empId]: newRoles });
  };

  const handleSaveRoles = () => {
    if (!selectedIntegration) return;
    Object.keys(assignments).forEach(empId => {
      updateEmployeeRoles(selectedIntegration.id, empId, assignments[empId]);
    });
    showMessage('Роли успешно обновлены', 'success');
    setModalOpen(false);
  };

  const getTypeIcon = (type) => {
    const icons = { Telegram: telegaIcon, WhatsApp: whatsappIcon, VKontakte: vkIcon, MAX: defaultIcon, Instagram: defaultIcon, Avito: defaultIcon };
    return icons[type] || defaultIcon;
  };
  const getStatusText = (status) => status === 'active' ? 'Активен' : status === 'inactive' ? 'Не в подписке' : 'Неизвестно';
  const getStatusClass = (status) => status === 'active' ? 'status-active' : 'status-inactive';
  const getTariffName = (tariff) => ({ lite: 'Lite', pro: 'Pro', max: 'MAX' }[tariff] || 'Lite');

  return (
    <div className="dashboard-section">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3>Список интеграций</h3>
          <p className="section-description">Нажмите на интеграцию, чтобы назначить роли сотрудникам</p>
        </div>
        <button className="btn-add-integration" onClick={handleOpenAddModal}>+ Добавить интеграцию</button>
      </div>

      {integrations.length === 0 ? <div className="empty-state"><p>У вас пока нет интеграций</p></div> : (
        <>
          <div className="integrations-table">
            <div className="table-header"><div className="col-type">Тип канала</div><div className="col-name">Название</div><div className="col-tariff">Тариф</div><div className="col-status">Статус</div></div>
            {integrations.map(integration => (
              <div key={integration.id} className="table-row" onClick={() => handleOpenModal(integration)} style={{ cursor: 'pointer' }}>
                <div className="col-type"><span className="integration-icon"><IconImage src={getTypeIcon(integration.type)} alt={integration.type} /></span><span>{integration.type}</span></div>
                <div className="col-name">{integration.name}</div>
                <div className="col-tariff"><span className="tariff-badge">{getTariffName(integration.tariff)}</span></div>
                <div className="col-status"><span className={`status-badge ${getStatusClass(integration.status)}`}>{getStatusText(integration.status)}</span></div>
              </div>
            ))}
          </div>

          {/* Модальное окно назначения ролей */}
          {modalOpen && selectedIntegration && (
            <div className="modal-overlay" onClick={() => setModalOpen(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>Роли: {selectedIntegration.name}</h3>
                  <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
                </div>
                <div className="modal-body">
                  {employees.length === 0 ? (
                    <p className="empty-hint">Сначала добавьте сотрудников во вкладке «Сотрудники»</p>
                  ) : (
                    employees.map(emp => (
                      <div key={emp.id} className="modal-employee-row">
                        <div className="emp-name">{emp.name} <span style={{ fontWeight: 400, fontSize: '0.85rem', color: '#666' }}>{emp.email}</span></div>
                        <div className="emp-roles">
                          {rolesOptions.map(role => (
                            <label key={role.id} className="role-checkbox-inline">
                              <input
                                type="checkbox"
                                checked={(assignments[emp.id] || []).includes(role.id)}
                                onChange={() => toggleRole(emp.id, role.id)}
                              />
                              {role.name}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="modal-footer">
                  <button className="modal-cancel" onClick={() => setModalOpen(false)}>Отмена</button>
                  <button className="modal-save" onClick={handleSaveRoles}>Сохранить</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Модальное окно добавления интеграции */}
      {addIntegrationModalOpen && (
        <div className="modal-overlay" onClick={handleCloseAddModal}>
          <div className="modal-content add-integration-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Добавить интеграцию</h3>
              <button className="modal-close" onClick={handleCloseAddModal}>×</button>
            </div>
            
            {/* Табы */}
            <div className="modal-tabs">
              <button 
                className={`modal-tab ${addModalTab === 'single' ? 'active' : ''}`}
                onClick={() => setAddModalTab('single')}
              >
                Одна интеграция
              </button>
              <button 
                className={`modal-tab ${addModalTab === 'multiple' ? 'active' : ''}`}
                onClick={() => setAddModalTab('multiple')}
              >
                Несколько интеграций
              </button>
            </div>

            {/* Переключатель периода оплаты */}
            <div className="billing-toggle">
              <button
                className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Помесячно
              </button>
              <button
                className={`toggle-btn ${billingCycle === '6months' ? 'active' : ''}`}
                onClick={() => setBillingCycle('6months')}
              >
                6 месяцев
                <span className="badge">-10%</span>
              </button>
              <button
                className={`toggle-btn ${billingCycle === '12months' ? 'active' : ''}`}
                onClick={() => setBillingCycle('12months')}
              >
                12 месяцев
                <span className="badge">-20%</span>
              </button>
            </div>

            <div className="modal-body">
              {addModalTab === 'single' ? (
                <div className="single-integration-form">
                  <div className="form-group">
                    <label>Выберите мессенджер</label>
                    <div className="messenger-grid">
                      {integrationTypes.map(type => {
                        const isConnected = type.id === 'Telegram' && telegramConnected;
                        const isSelected = singleIntegration.type === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            className={`messenger-card${isSelected ? ' selected' : ''}${isConnected ? ' connected' : ''}`}
                            onClick={() => handleMessengerCardClick(type.id)}
                          >
                            {isConnected && <span className="messenger-badge"><IconImage src={acceptIcon} alt="✓" size={16} /></span>}
                            <IconImage src={getTypeIcon(type.id)} alt={type.name} />
                            <span className="messenger-card-name">{type.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Тариф</label>
                    <select 
                      className="modal-select"
                      value={singleIntegration.tariff}
                      onChange={(e) => handleSingleIntegrationChange('tariff', e.target.value)}
                    >
                      <option value="">Выберите тариф</option>
                      {tariffOptions.map(tariff => {
                        const priceData = tariff.pricing[billingCycle];
                        return (
                          <option key={tariff.id} value={tariff.id}>
                            {tariff.name} - {priceData.price} ₽/{billingCycle === 'monthly' ? 'месяц' : billingCycle === '6months' ? 'мес (6 мес)' : 'мес (12 мес)'}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="multiple-integrations-form">
                  {multipleIntegrations.map((item, index) => (
                    <div key={item.id} className={`integration-row${item.type === 'Telegram' && telegramConnected ? ' tg-row-connected' : ''}`}>
                      <div className="form-group">
                        <label>Интеграция #{index + 1}{item.type === 'Telegram' && telegramConnected && <IconImage src={acceptIcon} alt="✓" size={16} className="tg-row-badge" />}</label>
                        <div className="integration-row-inputs">
                          <select 
                            className="modal-select"
                            value={item.type}
                            onChange={(e) => handleMultipleIntegrationChange(item.id, 'type', e.target.value)}
                          >
                            <option value="">Тип</option>
                            {integrationTypes.map(type => (
                              <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                          </select>
                          <select 
                            className="modal-select"
                            value={item.tariff}
                            onChange={(e) => handleMultipleIntegrationChange(item.id, 'tariff', e.target.value)}
                          >
                            <option value="">Тариф</option>
                            {tariffOptions.map(tariff => {
                              const priceData = tariff.pricing[billingCycle];
                              return (
                                <option key={tariff.id} value={tariff.id}>
                                  {tariff.name} - {priceData.price} ₽
                                </option>
                              );
                            })}
                          </select>
                          {multipleIntegrations.length > 1 && (
                            <button 
                              className="btn-remove-row"
                              onClick={() => removeMultipleIntegrationRow(item.id)}
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="btn-add-row" onClick={addMultipleIntegrationRow}>
                    + Добавить еще интеграцию
                  </button>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <div className="total-price">
                Итого: {calculateTotalPrice().toLocaleString('ru-RU')} ₽
                <span className="total-period">
                  {billingCycle === 'monthly' ? '/месяц' : billingCycle === '6months' ? '(за 6 месяцев)' : '(за 12 месяцев)'}
                </span>
              </div>
              <button className="modal-cancel" onClick={handleCloseAddModal}>Отмена</button>
              {canShowPayButton() && (
                <button className="modal-pay" onClick={handlePay}>Оплатить</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно подключения Telegram — рендерится ПОСЛЕ основного, поверх */}
      {telegramSetupOpen && (
        <div className="modal-overlay tg-setup-overlay" onClick={() => setTelegramSetupOpen(false)}>
          <div className="modal-content tg-setup-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Подключить Telegram</h3>
              <button className="modal-close" onClick={() => setTelegramSetupOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="tg-account-section">
                {telegramConnected && telegramStatus.includes('✅') ? (
                  <div className="tg-success-state">
                    <div className="tg-success-icon"><IconImage src={acceptIcon} alt="Успех" size={48} /></div>
                    <p className="tg-success-title">Telegram подключен. Можно приступать к работе ✅</p>
                    <button className="modal-save" onClick={() => setTelegramSetupOpen(false)}>Готово</button>
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label>Поддомен amoCRM</label>
                      <input
                        className="modal-input"
                        value={telegramSubdomain}
                        onChange={(e) => setTelegramSubdomain(e.target.value)}
                        placeholder="mycompany"
                      />
                    </div>
                    <p className="tg-section-hint">
                      1) Откройте Telegram → Настройки → Устройства → Связать устройство
                      <br />
                      2) Сканируйте QR-код ниже
                    </p>
                    {!telegramQr && (
                      <div className="tg-progress-wrap">
                        <div className="tg-progress-bar"><div className="tg-progress-fill"></div></div>
                        <span className="tg-progress-label">Готовим QR-код...</span>
                      </div>
                    )}
                    {telegramQr && (
                      <div className="telegram-qr-wrap">
                        <img src={telegramQr} alt="Telegram QR" />
                      </div>
                    )}
                    {telegramStatus && (
                      <div className={`telegram-status${telegramStatus.toLowerCase().includes('ошибка') ? ' tg-status-error' : ''}`}>
                        {telegramStatus}
                      </div>
                    )}
                    {telegramPasswordNeeded && (
                      <div className="tg-section-actions" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                        <input
                          type="password"
                          className="tg-token-input"
                          placeholder={telegramPasswordHint ? `2FA пароль (подсказка: ${telegramPasswordHint})` : '2FA пароль Telegram'}
                          value={telegramPassword}
                          onChange={(e) => setTelegramPassword(e.target.value)}
                        />
                        <button
                          className="modal-save"
                          disabled={!telegramPassword.trim() || telegramPasswordSubmitting}
                          onClick={handleSubmitTelegramPassword}
                        >
                          {telegramPasswordSubmitting ? 'Отправка...' : 'Подтвердить 2FA пароль'}
                        </button>
                      </div>
                    )}
                    <div className="tg-section-actions">
                      <button
                        className="tg-cancel-btn"
                        onClick={() => {
                          setTelegramSessionId(null);
                          setTelegramQr(null);
                          setTelegramStatus('');
                          setTelegramConnecting(false);
                          setTelegramPasswordNeeded(false);
                          setTelegramPassword('');
                          setTelegramPasswordHint('');
                          setTelegramSetupOpen(false);
                        }}
                      >
                        Отмена
                      </button>
                      <button className="btn-add-integration" onClick={handleGenerateTelegramQr}>
                        Обновить QR-код
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== 4. Вкладка Сотрудники (НОВАЯ) =====
function EmployeesTab({ employees, setEmployees, showMessage }) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpEmail, setNewEmpEmail] = useState('');

  const handleAddEmployee = () => {
    if (newEmpName.trim() && newEmpEmail.trim()) {
      const newEmp = { id: Date.now(), name: newEmpName.trim(), email: newEmpEmail.trim() };
      setEmployees(prev => {
        const updated = [...prev, newEmp];
        const { user } = useAuth(); // Доступ к контексту внутри замыкания
        if (user) localStorage.setItem(`employees_${user.id}`, JSON.stringify(updated));
        return updated;
      });
      setNewEmpName('');
      setNewEmpEmail('');
      setAddModalOpen(false);
      showMessage(`Сотрудник ${newEmp.name} добавлен`, 'success');
    }
  };

  const handleDeleteEmployee = (id, name) => {
    setEmployees(prev => {
      const updated = prev.filter(e => e.id !== id);
      const { user } = useAuth();
      if (user) localStorage.setItem(`employees_${user.id}`, JSON.stringify(updated));
      return updated;
    });
    showMessage(`Сотрудник ${name} удален`, 'success');
  };

  return (
    <div className="dashboard-section">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3>Управление сотрудниками</h3>
          <p className="section-description">Добавляйте и удаляйте сотрудников для доступа к интеграциям</p>
        </div>
        <button className="btn-add-emp" onClick={() => setAddModalOpen(true)}>+ Добавить сотрудника</button>
      </div>

      {employees.length === 0 ? (
        <div className="empty-state"><p>Нет добавленных сотрудников</p></div>
      ) : (
        <div className="employees-list">
          {employees.map(emp => (
            <div key={emp.id} className="employee-card">
              <div className="emp-avatar">{emp.name.charAt(0).toUpperCase()}</div>
              <div className="emp-info">
                <h4>{emp.name}</h4>
                <p>{emp.email}</p>
              </div>
              <button className="btn-delete-emp" onClick={() => handleDeleteEmployee(emp.id, emp.name)}>Удалить</button>
            </div>
          ))}
        </div>
      )}

      {addModalOpen && (
        <div className="modal-overlay" onClick={() => setAddModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header"><h3>Добавить сотрудника</h3><button className="modal-close" onClick={() => setAddModalOpen(false)}>×</button></div>
            <div className="modal-body">
              <input className="modal-input" placeholder="ФИО" value={newEmpName} onChange={e => setNewEmpName(e.target.value)} />
              <input className="modal-input" placeholder="Email" type="email" value={newEmpEmail} onChange={e => setNewEmpEmail(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setAddModalOpen(false)}>Отмена</button>
              <button className="modal-save" onClick={handleAddEmployee}>Добавить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Главный компонент =====
function DashboardPage() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('integrations');
  const [integrations, setIntegrations] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [openAddModalFromPricing, setOpenAddModalFromPricing] = useState(false);
  const [preselectedTariff, setPreselectedTariff] = useState(null);

  const getDemoIntegrations = React.useCallback(() => [], []);

  useEffect(() => {
    if (!user) { navigate('/auth'); return; }
    // Clear localStorage to remove old demo integrations
    localStorage.removeItem(`integrations_${user.id}`);
    setIntegrations(getDemoIntegrations());
    
    const savedEmp = localStorage.getItem(`employees_${user.id}`);
    setEmployees(savedEmp ? JSON.parse(savedEmp) : []);

    // Check if navigation state indicates we should open add integration modal
    if (location.state?.openAddIntegrationModal) {
      setOpenAddModalFromPricing(true);
      setPreselectedTariff(location.state.selectedTariff || null);
      // Clear the state to prevent reopening on refresh
      window.history.replaceState({}, document.title);
    }
  }, [user, navigate, getDemoIntegrations, location.state]);

  const saveIntegrations = (newIntegrations) => {
    setIntegrations(newIntegrations);
    if (user) localStorage.setItem(`integrations_${user.id}`, JSON.stringify(newIntegrations));
  };

  const updateEmployeeRoles = (integrationId, employeeId, roles) => {
    saveIntegrations(integrations.map(integ =>
      integ.id === integrationId ? { ...integ, employeeRoles: { ...integ.employeeRoles, [employeeId]: roles } } : integ
    ));
  };

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const tabs = [
    { id: 'integrations', label: 'Интеграции' },
    { id: 'subscriptions', label: 'Подписки' },
    { id: 'employees', label: 'Сотрудники' },
    { id: 'notes', label: 'Заметки' },
  ];

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <div className="dashboard-topbar">
        <div className="user-info">
          <div className="user-avatar">{user?.name?.charAt(0)?.toUpperCase() || 'U'}</div>
          <div>
            <h3>Добро пожаловать, {user?.name}!</h3>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>
        <div className="topbar-actions">
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`toggle-switch ${isDark ? 'active' : ''}`}>
              <div className="toggle-slider"></div>
            </div>
            <span className="theme-label">{isDark ? 'Темная' : 'Светлая'}</span>
          </div>
          <button onClick={() => { logout(); navigate('/auth'); }} className="logout-btn">Выйти</button>
        </div>
      </div>

      <div className="dashboard-tabs">
        {tabs.map(tab => (
          <button key={tab.id} className={`tab-button ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
        ))}
      </div>

      <div className="dashboard-content">
        {message.text && <div className={`dashboard-message ${message.type}`}>{message.text}</div>}
        {activeTab === 'integrations' && <IntegrationsTab user={user} integrations={integrations} employees={employees} updateEmployeeRoles={updateEmployeeRoles} showMessage={showMessage} setIntegrations={setIntegrations} openAddModalFromPricing={openAddModalFromPricing} preselectedTariff={preselectedTariff} setOpenAddModalFromPricing={setOpenAddModalFromPricing} />}
        {activeTab === 'subscriptions' && <SubscriptionsTab integrations={integrations} />}
        {activeTab === 'employees' && <EmployeesTab employees={employees} setEmployees={setEmployees} showMessage={showMessage} />}
        {activeTab === 'notes' && <NotesTab user={user} showMessage={showMessage} />}
      </div>
    </div>
  );
}

// ===== 5. Вкладка Заметки =====
function NotesTab({ user, showMessage }) {
  const [notes, setNotes] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [images, setImages] = React.useState([]);
  const [imagePreview, setImagePreview] = React.useState(null);

  const [viewingNote, setViewingNote] = React.useState(null);

  React.useEffect(() => {
    if (!user) return;
    const s = localStorage.getItem(`notes_${user.id}`);
    setNotes(s ? JSON.parse(s) : []);
  }, [user]);

  const saveNotes = (next) => {
    setNotes(next);
    if (user) localStorage.setItem(`notes_${user.id}`, JSON.stringify(next));
  };

  const openNewNote = () => {
    setEditing(null);
    setTitle('');
    setBody('');
    setImages([]);
    setModalOpen(true);
  };

  const handleImageFile = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    })
  };

  const handleAddImages = async (files) => {
    const arr = Array.from(files || []);
    const loaded = await Promise.all(arr.map(f => handleImageFile(f)));
    setImages(prev => [...prev, ...loaded]);
  };

  const removeImage = (idx) => {
    setImages(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSaveNote = () => {
    if (!title.trim() && !body.trim()) { showMessage('Нельзя сохранить пустую заметку', 'error'); return; }
    if (editing) {
      const updated = notes.map(n => n.id === editing.id ? { ...n, title, body, images, updatedAt: Date.now() } : n);
      saveNotes(updated);
      showMessage('Заметка обновлена', 'success');
    } else {
      const newNote = { id: Date.now(), title, body, images, createdAt: Date.now() };
      const next = [newNote, ...notes];
      saveNotes(next);
      showMessage('Заметка сохранена', 'success');
    }
    setModalOpen(false);
  };

  const handleEditNote = (note) => {
    setEditing(note);
    setTitle(note.title);
    setBody(note.body);
    setImages(note.images || []);
    setModalOpen(true);
  };

  const handleDeleteNote = (id) => {
    const next = notes.filter(n => n.id !== id);
    saveNotes(next);
    showMessage('Заметка удалена', 'success');
  };

  const openViewNote = (note) => {
    setViewingNote(note);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="dashboard-section notes-section">
      <div className="section-header notes-header">
        <div className="notes-title-group">
          <div className="notes-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div>
            <h3>Заметки</h3>
            <p className="section-description">Создавайте заметки и прикрепляйте изображения</p>
          </div>
        </div>
        <button className="btn-add btn-new-note" onClick={openNewNote}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Новая заметка
        </button>
      </div>

      <div className="notes-content">
        <div className="column-header">
          <h4>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            Мои заметки
          </h4>
          <span className="notes-count">{notes.length}</span>
        </div>
        {notes.length === 0 ? (
          <div className="empty-state notes-empty">
            <div className="empty-illustration">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
            </div>
            <p>Пока нет заметок</p>
            <span>Создайте первую заметку, чтобы начать</span>
          </div>
        ) : (
          <div className="notes-list">
            {notes.map((n, idx) => (
              <div 
                key={n.id} 
                className="note-card"
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={() => openViewNote(n)}
              >
                <div className="note-card-accent"></div>
                <div className="note-card-content">
                  <div className="note-card-header">
                    <div className="note-title-group">
                      <h5>{n.title || 'Без заголовка'}</h5>
                      <div className="note-meta">
                        <span className="note-date">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {formatDate(n.createdAt)}
                        </span>
                        {n.images && n.images.length > 0 && (
                          <span className="note-attachments">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            {n.images.length}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="note-actions" onClick={e => e.stopPropagation()}>
                      <button onClick={() => handleEditNote(n)} className="note-btn edit" title="Редактировать">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button onClick={() => handleDeleteNote(n.id)} className="note-btn delete" title="Удалить">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="note-card-body">
                    <p>{n.body}</p>
                  </div>
                  {n.images && n.images.length > 0 && (
                    <div className="note-images-preview">
                      {n.images.slice(0, 3).map((src, idx) => (
                        <div key={idx} className="note-thumb" onClick={e => { e.stopPropagation(); setImagePreview(src); }}>
                          <img src={src} alt="" />
                        </div>
                      ))}
                      {n.images.length > 3 && (
                        <div className="note-thumb more" onClick={e => e.stopPropagation()}>
                          <span>+{n.images.length - 3}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="modal-overlay note-modal-overlay" onClick={()=>setModalOpen(false)}>
          <div className="modal-content note-modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header note-modal-header">
              <div className="modal-title-group">
                <div className="modal-icon note-modal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3>{editing ? 'Редактировать заметку' : 'Новая заметка'}</h3>
              </div>
              <button className="modal-close" onClick={()=>setModalOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body note-modal-body">
              <div className="note-input-group">
                <label className="note-input-label">Заголовок</label>
                <input className="modal-input note-title-input" placeholder="Введите заголовок..." value={title} onChange={e=>setTitle(e.target.value)} />
              </div>
              <div className="note-input-group">
                <label className="note-input-label">Текст заметки</label>
                <textarea className="modal-input note-body-input" placeholder="Введите текст заметки..." value={body} onChange={e=>setBody(e.target.value)} rows={6} />
              </div>
              <div className="image-upload-section">
                <label className="image-upload-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  Добавить изображения
                  <input type="file" accept="image/*" multiple onChange={e=>handleAddImages(e.target.files)} hidden />
                </label>
                {images.length > 0 && (
                  <div className="image-preview-grid">
                    {images.map((src, idx) => (
                      <div key={idx} className="image-preview-item">
                        <img src={src} alt="" />
                        <button className="remove-image-btn" onClick={() => removeImage(idx)} title="Удалить">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer note-modal-footer">
              <button className="modal-cancel" onClick={()=>setModalOpen(false)}>Отмена</button>
              <button className="modal-save" onClick={handleSaveNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {editing ? 'Сохранить изменения' : 'Создать заметку'}
              </button>
            </div>
          </div>
        </div>
      )}

      {imagePreview && (
        <div className="modal-overlay image-preview-overlay" onClick={()=>setImagePreview(null)}>
          <div className="image-preview-modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-close image-preview-close" onClick={()=>setImagePreview(null)}>×</button>
            <img src={imagePreview} alt="Preview" />
          </div>
        </div>
      )}

      {viewingNote && (
        <div className="modal-overlay note-view-overlay" onClick={()=>setViewingNote(null)}>
          <div className="modal-content note-view-modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header note-view-header">
              <div className="modal-title-group">
                <div className="modal-icon note-view-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3>{viewingNote.title || 'Без заголовка'}</h3>
              </div>
              <button className="modal-close" onClick={()=>setViewingNote(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body note-view-body">
              <div className="note-view-meta">
                <div className="note-view-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {formatDate(viewingNote.createdAt)}
                </div>
                {viewingNote.images && viewingNote.images.length > 0 && (
                  <div className="note-view-attachments">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    {viewingNote.images.length} {viewingNote.images.length === 1 ? 'изображение' : viewingNote.images.length < 5 ? 'изображения' : 'изображений'}
                  </div>
                )}
              </div>
              <div className="note-view-text">{viewingNote.body}</div>
              {viewingNote.images && viewingNote.images.length > 0 && (
                <div className="note-view-images">
                  {viewingNote.images.map((src, idx) => (
                    <div key={idx} className="note-view-image-wrapper" onClick={() => setImagePreview(src)}>
                      <img src={src} alt="" />
                      <div className="image-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-footer note-view-footer">
              <button className="modal-cancel" onClick={()=>setViewingNote(null)}>Закрыть</button>
              <button className="modal-save" onClick={() => { setViewingNote(null); handleEditNote(viewingNote); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Редактировать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;