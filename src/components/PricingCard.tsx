import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="text-4xl font-bold text-red-500 mb-6">€{price}</div>
      <p className="text-gray-600 mb-6">Una tantum</p>
      <ul className="text-left space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
        Scegli Piano
      </button>
    </div>
  );
}