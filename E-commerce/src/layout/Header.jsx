import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          {" "}
          Fashion Passion{" "}
        </div>

        {/* Menü (Mobil ve Masaüstü için) */}
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
          <a href="/" className="block text-gray-700 py-2 hover:text-blue-500">
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
    </header>
  );
};

export default Header;
