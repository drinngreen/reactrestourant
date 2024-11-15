import React from 'react';

export default function Hero() {
  return (
    <div 
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Zoliiweb</h1>
        <h2 className="text-3xl font-semibold mb-6">Soluzioni Digitali per Ristoranti</h2>
        <p className="text-xl mb-8">Trasforma il tuo ristorante con soluzioni digitali innovative e personalizzate</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Scopri di Più
        </button>
      </div>
    </div>
  );
}