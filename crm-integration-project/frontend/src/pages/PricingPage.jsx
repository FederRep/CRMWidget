import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './PricingPage.css';

function PricingPage() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleStartWithPlan = (planId) => {
    navigate('/dashboard', { state: { openAddIntegrationModal: true, selectedTariff: planId } });
  };

  const plans = [
    {
      id: 'lite',
      name: 'Lite',
      description: 'Для начинающих',
      features: [
        { text: '100 диалогов', included: true },
        { text: 'Нельзя писать первым', included: false },
      ],
      pricing: {
        monthly: { price: 720, period: 'месяц' },
        '6months': { price: 649, period: 'месяц (скидка 10%)', original: 720 },
        '12months': { price: 579, period: 'месяц (скидка 20%)', original: 720 },
      },
      color: 'lite',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Для растущих компаний',
      features: [
        { text: '500 диалогов', included: true },
        { text: 'Можно писать первым', included: true },
      ],
      pricing: {
        monthly: { price: 1140, period: 'месяц' },
        '6months': { price: 1026, period: 'месяц (скидка 10%)', original: 1140 },
        '12months': { price: 912, period: 'месяц (скидка 20%)', original: 1140 },
      },
      color: 'pro',
      popular: true,
    },
    {
      id: 'max',
      name: 'MAX',
      description: 'Для профессионалов',
      features: [
        { text: '1000 диалогов', included: true },
        { text: 'Можно писать первым', included: true },
        { text: 'Расшифровка аудиосообщений', included: true },
      ],
      pricing: {
        monthly: { price: 2899, period: 'месяц' },
        '6months': { price: 2609, period: 'месяц (скидка 10%)', original: 2899 },
        '12months': { price: 2319, period: 'месяц (скидка 20%)', original: 2899 },
      },
      color: 'max',
      popular: false,
    },
  ];

  const getCyclePrice = (plan) => {
    return plan.pricing[billingCycle];
  };

  const calculateSavings = (plan) => {
    const priceData = getCyclePrice(plan);
    if (!priceData.original) return 0;
    return Math.round(priceData.original - priceData.price);
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Выберите подходящий тариф</h1>
        <p>Гибкое ценообразование для вашего бизнеса</p>

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
      </div>

      <div className="pricing-cards">
        {plans.map((plan) => {
          const priceData = getCyclePrice(plan);
          const savings = calculateSavings(plan);

          return (
            <div
              key={plan.id}
              className={`pricing-card pricing-card-${plan.color}`}
            >
              <div className="card-header">
                <h2>{plan.name}</h2>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="pricing-section">
                <div className="price">
                  <span className="currency">₽</span>
                  <span className="amount">{priceData.price}</span>
                  <span className="period">/{priceData.period}</span>
                </div>
                {savings > 0 && (
                  <div className="savings">
                    Экономия: {savings}₽/месяц
                  </div>
                )}
                {billingCycle !== 'monthly' && priceData.original && (
                  <div className="price-breakdown">
                    {billingCycle === '6months' && `Всего: ${(priceData.price * 6).toLocaleString('ru-RU')}₽`}
                    {billingCycle === '12months' && `Всего: ${(priceData.price * 12).toLocaleString('ru-RU')}₽`}
                  </div>
                )}
              </div>

              <button className={`cta-button cta-${plan.color}`} onClick={() => handleStartWithPlan(plan.id)}>
                Начать с {plan.name}
              </button>

              <div className="features-list">
                <h3>Возможности:</h3>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className={`feature-check ${feature.included ? 'included' : 'excluded'}`}>
                      {feature.included ? '✓' : '—'}
                    </div>
                    <span className={feature.included ? 'feature-text' : 'feature-text disabled'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingPage;
