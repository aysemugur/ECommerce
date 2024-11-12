import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Menü Bar (Mobil ve Masaüstü için) */
    <div className=" menubar fixed inset-x-0 bg-white w-full flex justify-between  items-center mt-0 ">
      <div className="w-full flex  items-center justify-between px-7 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Fashion Passion</h1>

        {/* Navigation (Mobil ve Masaüstü için) */}
        <div className="flex items-center justify-center mr-4">
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
        </div>

        {/* Alışveriş Sepeti ve Kullanıcı İkonları */}
        <div className="flex flex-row gap-x-4  ">
          <div className="mr-0">
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
            <i className="fa-light fa-cart-shopping"></i>
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

      {/* Mobil Menüsü (Toggle ile açılır) */}
      {menuOpen && (
        <nav className="fixed inset-0 bg-white z-0 flex flex-col items-center justify-top space-y-0 mt-24 ">
          <a href="/" className=" text-gray-700 py-2  hover:text-blue-500">
            Home
          </a>
          <a
            href="/product"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Product
          </a>
          <a
            href="/pricing"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Pricing
          </a>

          <a
            href="/contact"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Menu;
