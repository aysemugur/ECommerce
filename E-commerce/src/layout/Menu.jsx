import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Menü Bar (Mobil ve Masaüstü için) */
    <div className=" menubar  bg-white w-full flex justify-between  items-center mt-0 ">
      <div className="w-full flex  items-center justify-between px-7 py-3">
        {/* Logo */}
        <h1 className="text-xl text-black font-semibold  sm:text-blue-600 font-bold text-2xl">
          Fashion Passion
        </h1>

        {/* Navigation (Mobil ve Masaüstü için) */}
        <div className="flex items-center justify-between mr-3">
          {/* Masaüstü menü - geniş ekranlar için */}
          <nav className="hidden  md:flex gap-x-3 ">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <Link to="/pages" className="text-gray-700 hover:text-blue-500">
              Pages
            </Link>
          </nav>
        </div>

        {/* Alışveriş Sepeti ve Kullanıcı İkonları */}
        <div className="flex flex-row gap-x-4  ">
          <div className="mr-0">
            <button className="ml-1 text-gray-700 hover:text-blue-500 ">
              <i className="far fa-user"></i>
            </button>
            <button className="ml-3 text-gray-700 hover:text-blue-500">
              <a className="hidden lg:flex">Login / Register </a>
            </button>
          </div>
          <button className="mr-1 text-gray-700 hover:text-blue-500">
            <i className="fas fa-search"></i>
          </button>
          <button className=" text-gray-700 hover:text-blue-500">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="hidden md:block text-gray-700 hover:text-blue-500">
            <i className="fa-regular fa-heart"></i>
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
        <nav className="fixed w-full bg-white z-10 flex flex-col items-center justify-center mt-[210px]  pt-5 pb-4 ">
          <Link to="/" className=" text-gray-700 py-2  hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/product"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Product
          </Link>
          <Link
            to="/pricing"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            className=" text-gray-700 py-2 hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Menu;
