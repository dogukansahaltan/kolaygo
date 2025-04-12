import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MobileMenu from '../components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profesyonel Nakliyat Hizmetleri',
  description: 'Guvenilir ve profesyonel nakliyat hizmeti. Ev tasima, ofis tasima ve sehirler arasi nakliyat hizmetleri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <body>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">KolaGoNak</div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-blue-600 transition">Ana Sayfa</a>
                <a href="/hizmetler" className="hover:text-blue-600 transition">Hizmetler</a>
                <a href="/fiyat-hesapla" className="hover:text-blue-600 transition">Fiyat Hesapla</a>
                <a href="/hakkimizda" className="hover:text-blue-600 transition">Hakkimizda</a>
                <a href="/iletisim" className="hover:text-blue-600 transition">Iletisim</a>
              </div>
              <MobileMenu />
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">KolaGoNak Nakliyat</h3>
                <p className="text-gray-400">2011'den beri guvenilir tasimacilik hizmeti</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li><a href="/evden-eve" className="text-gray-400 hover:text-white transition">Evden Eve Nakliyat</a></li>
                  <li><a href="/ofis-tasima" className="text-gray-400 hover:text-white transition">Ofis Tasima</a></li>
                  <li><a href="/sehirler-arasi" className="text-gray-400 hover:text-white transition">Sehirler Arasi Nakliyat</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Hizli Baglantılar</h3>
                <ul className="space-y-2">
                  <li><a href="/hakkimizda" className="text-gray-400 hover:text-white transition">Hakkimizda</a></li>
                  <li><a href="/iletisim" className="text-gray-400 hover:text-white transition">Iletisim</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Iletisim</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <span>0850 123 45 67</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <span>info@kolagonak.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Istanbul, Turkiye</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2024 KolaGoNak Nakliyat. Tum haklari saklidir.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 