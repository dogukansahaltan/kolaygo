'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
      >
        <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-t mt-0 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-blue-600 transition">Ana Sayfa</a>
            <a href="/hizmetler" className="hover:text-blue-600 transition">Hizmetler</a>
            <a href="/fiyat-hesapla" className="hover:text-blue-600 transition">Fiyat Hesapla</a>
            <a href="/hakkimizda" className="hover:text-blue-600 transition">Hakkımızda</a>
            <a href="/iletisim" className="hover:text-blue-600 transition">İletişim</a>
          </nav>
        </div>
      )}
    </div>
  );
} 