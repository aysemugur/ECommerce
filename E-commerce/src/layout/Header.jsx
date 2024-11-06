import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-0 flex flex-col justify-between items-center py-2 px-0">
      {/* Top Info Bar (Mobil ve Masaüstü için) */}
      <div className="bg-[#17213C] text-white text-sm p-2 w-full">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* İletişim Bilgileri */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-phone-alt"></i>
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-envelope"></i>
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* Mesaj */}
          <div className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex items-center space-x-3">
            <span>Follow Us :</span>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Menü Bar (Mobil ve Masaüstü için) */}
      <div className="bg-white shadow-md w-full justify-between ">
        <div className="container flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Fashion Passion
          </div>

          {/* Navigation (Mobil ve Masaüstü için) */}
          <div className="flex items-center space-x-4">
            {/* Masaüstü menü - geniş ekranlar için */}
            <nav className="hidden md:flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
              <a href="/shop" className="text-gray-700 hover:text-blue-500">
                Shop
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-blue-500">
                Blog
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
              <a href="/pages" className="text-gray-700 hover:text-blue-500">
                Pages
              </a>
            </nav>

            {/* Alışveriş Sepeti ve Kullanıcı İkonları */}
            <div className="hidden md:flex space-x-4">
              <button className="text-gray-700 hover:text-blue-500">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="text-gray-700 hover:text-blue-500">
                <i className="fas fa-user"></i>
              </button>
            </div>

            {/* Hamburger Menü - sadece mobil için */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobil Menüsü (Toggle ile açılır) */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg p-4">
            <a
              href="/"
              className="block text-gray-700 py-2 hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="/products"
              className="block text-gray-700 py-2 hover:text-blue-500"
            >
              Product
            </a>
            <a
              href="/pricing"
              className="block text-gray-700 py-2 hover:text-blue-500"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="block text-gray-700 py-2 hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
