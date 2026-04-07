import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './DashboardPage.css';

import telegaIcon from '../icons/t.svg';
import whatsappIcon from '../icons/w.svg';
import vkIcon from '../icons/v.svg';
import linkedinIcon from '../icons/l.svg';
import defaultIcon from '../icons/d.svg';

const IconImage = ({ src, alt, className, size = 24 }) => (
  <img src={src} alt={alt} className={className} style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }} />
);

// ===== 1. Вкладка Настройки (Интеграции + Назначение ролей) =====
function SettingsTab({ integrations, employees, updateEmployeeRoles, showMessage }) {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [assignments, setAssignments] = useState({});

  const rolesOptions = [
    { id: 'analyst', name: 'Аналитик' },
    { id: 'manager', name: 'Менеджер' },
    { id: 'director', name: 'Руководитель' },
  ];

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
    const icons = { Telegram: telegaIcon, WhatsApp: whatsappIcon, VK: vkIcon, LinkedIn: linkedinIcon };
    return icons[type] || defaultIcon;
  };

  return (
    <div className="dashboard-section">
      <div className="section-header">
        <h3>Настройки интеграций</h3>
        <p className="section-description">Нажмите на интеграцию, чтобы назначить роли сотрудникам</p>
      </div>

      {integrations.length === 0 ? (
        <div className="empty-state"><p>Нет интеграций для настройки</p></div>
      ) : (
        <div className="integrations-settings-list">
          {integrations.map(integ => (
            <div key={integ.id} className="settings-integration-card" onClick={() => handleOpenModal(integ)}>
              <IconImage src={getTypeIcon(integ.type)} alt={integ.type} size={28} />
              <span className="settings-int-name">{integ.name}</span>
            </div>
          ))}
        </div>
      )}

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
    </div>
  );
}

// ===== 2. Вкладка Подписки (с иконками) =====
function SubscriptionsTab({ integrations }) {
  const getTypeIcon = (type) => {
    const icons = { Telegram: telegaIcon, WhatsApp: whatsappIcon, VK: vkIcon, LinkedIn: linkedinIcon };
    return icons[type] || defaultIcon;
  };
  const getStatusText = (status) => ({ active: 'Активна', expired: 'Истекла', pending: 'На рассмотрении' }[status] || 'Неизвестно');
  const getStatusClass = (status) => ({ active: 'subscription-active', expired: 'subscription-expired', pending: 'subscription-pending' }[status] || '');
  const getTariffName = (tariff) => ({ free: 'Free', plus: 'Plus', pro: 'Pro', pro_plus: 'Pro Plus' }[tariff] || 'Free');

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

// ===== 3. Вкладка Интеграции =====
function IntegrationsTab({ integrations }) {
  const getTypeIcon = (type) => {
    const icons = { Telegram: telegaIcon, WhatsApp: whatsappIcon, VK: vkIcon, LinkedIn: linkedinIcon };
    return icons[type] || defaultIcon;
  };
  const getStatusText = (status) => status === 'active' ? 'Активен' : status === 'inactive' ? 'Не в подписке' : 'Неизвестно';
  const getStatusClass = (status) => status === 'active' ? 'status-active' : 'status-inactive';
  const getTariffName = (tariff) => ({ free: 'Free', plus: 'Plus', pro: 'Pro', pro_plus: 'Pro Plus' }[tariff] || 'Free');

  return (
    <div className="dashboard-section">
      <div className="section-header"><h3>Список интеграций</h3></div>
      {integrations.length === 0 ? <div className="empty-state"><p>У вас пока нет интеграций</p></div> : (
        <div className="integrations-table">
          <div className="table-header"><div className="col-type">Тип канала</div><div className="col-name">Название</div><div className="col-tariff">Тариф</div><div className="col-status">Статус</div></div>
          {integrations.map(integration => (
            <div key={integration.id} className="table-row">
              <div className="col-type"><span className="integration-icon"><IconImage src={getTypeIcon(integration.type)} alt={integration.type} /></span><span>{integration.type}</span></div>
              <div className="col-name">{integration.name}</div>
              <div className="col-tariff"><span className="tariff-badge">{getTariffName(integration.tariff)}</span></div>
              <div className="col-status"><span className={`status-badge ${getStatusClass(integration.status)}`}>{getStatusText(integration.status)}</span></div>
            </div>
          ))}
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('integrations');
  const [integrations, setIntegrations] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (!user) { navigate('/auth'); return; }
    const savedInt = localStorage.getItem(`integrations_${user.id}`);
    setIntegrations(savedInt ? JSON.parse(savedInt) : getDemoIntegrations());
    
    const savedEmp = localStorage.getItem(`employees_${user.id}`);
    setEmployees(savedEmp ? JSON.parse(savedEmp) : []);
  }, [user, navigate]);

  const getDemoIntegrations = () => [
    { id: 1, type: 'Telegram', name: 'Основной Telegram канал', status: 'active', subscriptionStatus: 'active', tariff: 'pro', channelsCount: 3, endDate: '2026-06-01', employeeRoles: {} },
    { id: 2, type: 'WhatsApp', name: 'WhatsApp Business', status: 'inactive', subscriptionStatus: 'expired', tariff: 'free', channelsCount: 1, endDate: '2025-12-15', employeeRoles: {} },
    { id: 3, type: 'VK', name: 'VK Сообщество', status: 'active', subscriptionStatus: 'active', tariff: 'plus', channelsCount: 5, endDate: '2026-03-20', employeeRoles: {} },
    { id: 4, type: 'LinkedIn', name: 'LinkedIn Company', status: 'active', subscriptionStatus: 'active', tariff: 'pro_plus', channelsCount: 2, endDate: '2026-02-10', employeeRoles: {} },
  ];

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
    { id: 'settings', label: 'Настройки' },
    { id: 'subscriptions', label: 'Подписки' },
    { id: 'employees', label: 'Сотрудники' },
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
        <button onClick={() => { logout(); navigate('/auth'); }} className="logout-btn">Выйти</button>
      </div>

      <div className="dashboard-tabs">
        {tabs.map(tab => (
          <button key={tab.id} className={`tab-button ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
        ))}
      </div>

      <div className="dashboard-content">
        {message.text && <div className={`dashboard-message ${message.type}`}>{message.text}</div>}
        {activeTab === 'integrations' && <IntegrationsTab integrations={integrations} />}
        {activeTab === 'settings' && <SettingsTab integrations={integrations} employees={employees} updateEmployeeRoles={updateEmployeeRoles} showMessage={showMessage} />}
        {activeTab === 'subscriptions' && <SubscriptionsTab integrations={integrations} />}
        {activeTab === 'employees' && <EmployeesTab employees={employees} setEmployees={setEmployees} showMessage={showMessage} />}
      </div>
    </div>
  );
}

export default DashboardPage;