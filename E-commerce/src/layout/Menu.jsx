import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Menü Bar (Mobil ve Masaüstü için) */
    <div className="bg-white shadow-md w-full flex justify-between  items-center ">
      <div className="w-full flex  items-center  justify-between px-7 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Fashion Passion</h1>

        {/* Navigation (Mobil ve Masaüstü için) */}
        <div className="flex items-center justify-center gap-x-8 ">
          {/* Masaüstü menü - geniş ekranlar için */}
          <nav className="hidden md:flex gap-x-3 ">
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
          <div className="flex flex-row gap-x-6 ">
            <div className="">
              <button className="text-gray-700 hover:text-blue-500 ">
                <i className="far fa-user"></i>
              </button>
              <button className="ml-2 text-gray-700 hover:text-blue-500">
                <a className="hidden lg:flex">Login / Register </a>
              </button>
            </div>
            <button className="text-gray-700 hover:text-blue-500">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-gray-700 hover:text-blue-500">
              <i className="far fa-shopping-basket"></i>
            </button>
            <button className="hidden md:block text-gray-700 hover:text-blue-500">
              <i className="far fa-heart"></i>
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
        <nav className="md:hidden flex flex-col  bg-white mx-auto items-center shadow-lg p-4">
          <a href="/" className="block text-gray-700 py-2 hover:text-blue-500">
            Home
          </a>
          <a
            href="/product"
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
  );
};

export default Menu;
