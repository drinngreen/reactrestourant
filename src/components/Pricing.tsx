import React from 'react';
import PricingCard from './PricingCard';

export default function Pricing() {
  const plans = [
    {
      title: 'Base',
      price: '499',
      features: [
        'Sito Web Responsive',
        'Menu Digitale',
        'Dominio Personalizzato',
        'Assistenza Email'
      ]
    },
    {
      title: 'Pro',
      price: '999',
      features: [
        'Tutto il piano Base',
        'App Mobile Personalizzata',
        'Sistema di Prenotazioni',
        'Assistenza Prioritaria'
      ]
    },
    {
      title: 'Premium',
      price: '1990',
      features: [
        'Tutto il piano Pro',
        'Dashboard Amministrativa',
        'Analisi Dati Avanzata',
        'Supporto 24/7'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Piani e Prezzi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}