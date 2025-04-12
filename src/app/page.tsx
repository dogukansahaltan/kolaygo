'use client';

import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-2 mx-auto max-w-7xl px-4 sm:pt-4 sm:px-6 md:pt-6 lg:pt-8 lg:px-8 xl:pt-10">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block">Güvenli ve Profesyonel</span>
                  <span className="block text-blue-600">Nakliyat Hizmeti</span>
                </h1>
                <p className="mt-2 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-lg lg:mx-0">
                  81 ilde profesyonel ekip ve modern ekipmanlarla yanınızdayız.
                </p>
                <div className="mt-4 sm:mt-6 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-base md:px-8">
                      Hizmetlerimiz
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div className="flex items-center space-x-6">
                      {/* Hemen Ara Butonu */}
                      <a href="tel:05324571362" className="btn-call">
                        <i className="fas fa-phone-alt"></i>
                        Hemen Ara
                      </a>
                      {/* Hizmetlerimiz Butonu */}
                      <a href="hizmetlerimiz" className="bg-white text-[#4052CC] px-6 py-3 rounded-lg font-semibold hover:bg-[#4052CC] hover:text-white transition-all duration-300">
                        Hizmetlerimiz →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Nakliyat Ekibi"
          />
        </div>
      </section>

      {/* Neden Biz */}
      <section className="why-us-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Neden Bizi Secmelisiniz?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Yillardir edindigimiz tecrube ve profesyonel ekibimizle farki yaratiyoruz.
            </p>
          </div>

          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">%100 Güvenli</h3>
                  <p className="text-sm text-white/80">Tüm eşyalarınız sigorta kapsamında</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🚚</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Hızlı Teslimat</h3>
                  <p className="text-sm text-white/80">Zamanında ve güvenli teslimat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section id="contact" className="py-16 bg-gradient-to-r from-[#4052CC] to-[#0063FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hizmetlerimiz
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Profesyonel ekibimizle tum nakliyat ihtiyaclariniz icin buradayiz.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="text-center">
                  <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">Ev Tasima</h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Evinizi guvenle ve ozenle yeni adresinize tasiyoruz.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="text-center">
                  <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">Ofis Tasima</h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Is yerinizi minimum kesinti ile tasiyoruz.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="text-center">
                  <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-4 text-center text-lg font-medium text-gray-900">Depolama</h3>
                <p className="mt-2 text-center text-base text-gray-500">
                  Esyalariniz guvenli depolama alanlarimizda koruma altinda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 