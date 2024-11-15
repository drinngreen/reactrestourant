import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contattaci</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nome e Cognome"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telefono"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Il tuo messaggio"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Invia Messaggio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}