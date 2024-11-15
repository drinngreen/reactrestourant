import React from 'react';
import { Smartphone, Globe, Clock, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'App Mobile Personalizzata',
      description: 'Un\'applicazione su misura per il tuo ristorante con menu digitale e sistema di prenotazioni.'
    },
    {
      icon: <Globe className="w-12 h-12 text-red-500" />,
      title: 'Sito Web Professionale',
      description: 'Presenza online ottimizzata con un sito web moderno e responsive.'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: 'Gestione Prenotazioni',
      description: 'Sistema automatizzato per gestire le prenotazioni in tempo reale.'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Sicurezza Garantita',
      description: 'Protezione dei dati e conformità alle normative sulla privacy.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}