import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              KolayGo Nakliyat
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Ana Sayfa
            </Link>
            <Link href="/hizmetler" className="text-gray-700 hover:text-primary">
              Hizmetler
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-primary">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-primary">
              İletişim
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 