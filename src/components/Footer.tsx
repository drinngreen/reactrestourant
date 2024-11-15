import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zoliiweb</h3>
            <p className="text-gray-400">
              Soluzioni digitali innovative per far crescere il tuo ristorante nel mondo digitale.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contatti</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@zoliiweb.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+39 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Milano, Italia</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Zoliiweb. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}