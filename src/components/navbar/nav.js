import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import logo from "./Logo.png";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="w-full bg-black text-white text-sm py-2 text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="underline cursor-pointer">ShopNow</span>
      </div>

      {/* MAIN NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-[40px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        {/* Right Side (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 rounded-md pl-4 pr-10 py-2 w-[260px] focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-500" />
          </div>

          <FiHeart className="text-2xl cursor-pointer" />

          <Link to="/cart" className="relative inline-block">
            <FiShoppingCart className="text-2xl cursor-pointer" />

            {cartState.cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-[2px]">
                {cartState.cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Language Dropdown (Desktop Only) */}
        <div
          className="relative cursor-pointer hidden md:flex items-center"
          onClick={() => setLanguageOpen(!languageOpen)}
        >
          <span className="mr-1">English</span>
          <FaAngleDown />

          {languageOpen && (
            <div className="absolute top-8 right-0 bg-white border rounded shadow-md w-28">
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                English
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Arabic
              </p>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {mobileMenu ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-fade-down">
          {/* Search Mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border w-full border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-600" />
          </div>

          {/* Menu Links */}
          <ul className="space-y-4 font-medium text-gray-700">
            <li>
              <Link to="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenu(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setMobileMenu(false)}>
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-6 pt-4 border-t">
            <FiHeart className="text-2xl cursor-pointer" />

            <Link to="/cart" className="relative inline-block">
              <FiShoppingCart className="text-2xl cursor-pointer" />

              {cartState.cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-[2px]">
                  {cartState.cart.length}
                </span>
              )}
            </Link>

            {/* Language in mobile */}
            <div
              className="relative cursor-pointer flex items-center"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <span className="mr-1">English</span>
              <FaAngleDown />

              {languageOpen && (
                <div className="absolute top-8 left-0 bg-white border rounded shadow-md w-28">
                  <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    English
                  </p>
                  <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Arabic
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
