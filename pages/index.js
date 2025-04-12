import Head from 'next/head';
import HomeSlider from '../components/HomeSlider';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>KolayGo Nakliyat - Profesyonel Taşımacılık Hizmetleri</title>
        <meta name="description" content="KolayGo Nakliyat ile güvenli ve profesyonel taşımacılık hizmetleri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <HomeSlider />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/images/resim3.jpg" alt="Evden Eve Nakliyat" className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2">Evden Eve Nakliyat</h3>
                <p className="text-gray-600">Profesyonel ekibimizle güvenli ve hızlı evden eve nakliyat hizmeti</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/images/resim4.jpg" alt="Şehirler Arası Taşımacılık" className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2">Şehirler Arası Taşımacılık</h3>
                <p className="text-gray-600">Türkiye'nin her yerine güvenli şehirler arası nakliyat hizmeti</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="/images/resim5.jpg" alt="Ofis Taşıma" className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ofis Taşıma</h3>
                <p className="text-gray-600">İşletmenizi minimum kesinti ile yeni yerine taşıyoruz</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 