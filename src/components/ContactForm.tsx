'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form gönderme işlemi
        console.log(formData); // Form verilerini kontrol etmek için
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-[#4052CC] text-2xl font-semibold mb-8">
                Formu doldurun, nakliyat danışmanınız sizi arasın!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* İsim Alanı */}
                <div>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="far fa-user"></i>
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Adınız Soyadınız"
                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4052CC]"
                            required
                        />
                    </div>
                </div>

                {/* Email Alanı */}
                <div>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="far fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ornek@email.com"
                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4052CC]"
                            required
                        />
                    </div>
                </div>

                {/* Telefon Alanı */}
                <div>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <img src="/tr-flag.png" alt="TR" className="w-5 h-4" />
                            <span className="text-gray-500">+90</span>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(5XX) XXX XX XX"
                            className="w-full px-4 py-3 pl-24 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4052CC]"
                            required
                        />
                    </div>
                </div>

                {/* Mesaj Alanı */}
                <div>
                    <div className="relative">
                        <span className="absolute left-4 top-6 text-gray-400">
                            <i className="far fa-comment-alt"></i>
                        </span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Taşınacak evinizin özellikleri (1+1, 2+1 vb.), konumu ve varsa özel notlarınız..."
                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4052CC] min-h-[100px] resize-none"
                            required
                        />
                    </div>
                </div>

                {/* KVKK Onayı */}
                <div className="flex items-start gap-2 mt-2">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1"
                    />
                    <span className="text-sm text-gray-600">
                        Verdiğim iletişim bilgileri kullanılarak benimle iletişim kurulmasını ve{' '}
                        <a href="#" className="text-[#4052CC]">kullanım koşullarını</a> kabul ediyorum.
                    </span>
                </div>

                {/* Gönder Butonu */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D1D1] text-white font-medium py-3 px-6 rounded-xl hover:opacity-95 transition-all mt-4"
                >
                    Detaylı bilgi al →
                </button>

                <div className="text-center text-gray-500 my-2">veya</div>

                {/* WhatsApp Butonu */}
                <a
                    href="https://wa.me/905324571362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center hover:opacity-95 transition-all"
                >
                    <i className="fab fa-whatsapp mr-2"></i>
                    WhatsApp ile İletişime Geçin
                </a>
            </form>
        </div>
    );
} 