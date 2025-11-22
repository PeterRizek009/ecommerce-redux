import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/darkModeSlice';
import logo from './Logo.png';
import logoWhite from './logoWhite.png';
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const darkModeState = useSelector((state) => state.darkmode.isDark);


  const [active, setActive] = useState(false);

  const showMenu = () => setActive(!active);

  const links = ["Home", "About", "Coupons", "Help"];

  return (
    <nav className='w-full sticky top-0 z-50 shadow-md min-w-[480px] bg-[#1E1E1E] text-white'>

      {/* Main Container */}
      <div className="px-4 md:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to={"/"}>
          <img
            src={logoWhite}
            alt="logo"
            className="h-[50px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold tracking-wide">
          {links.map((link) => (
            <li key={link}>
              <Link className="hover:text-orange-400 transition" to={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Cart */}
          <Link to={"/cart"} className="relative hover:text-orange-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
                0a2 2 0 100 4 2 2 0 000-4zm-8 
                2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            {cartState.cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-[2px]">
                {cartState.cart.length}
              </span>
            )}
          </Link>

          {/* Mode Toggle */}
          <button onClick={() => dispatch(toggleDarkMode())}>
            {darkModeState ? (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4
              18.4l1.4 1.4M1 12h2M21 12h2M4.2 
              19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-200" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 
              3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          {/* Sign In */}
          <Link
            to={"/signin"}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded uppercase text-sm font-bold transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden scale-75">
          <Hamburger onToggle={showMenu} color="white" />
        </div>

      </div>

      {/* Mobile Menu */}
      {active && (
        <ul className={`md:hidden flex flex-col py-4 px-6 space-y-4 font-semibold 
            ${darkModeState ? "bg-[#1A1A1A]" : "bg-[#222] text-white"} shadow-lg`}>
          {links.map((link) => (
            <li key={link}>
              <Link className="hover:text-orange-400" to={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}

          {/* Cart in Mobile */}
          <Link to={"/cart"} className="relative flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 
                13L5.4 5M7 13l-2.293 
                2.293c-.63.63-.184 1.707.707 
                1.707H17m0 
                0a2 2 0 100 4 2 2 0 000-4zm-8 
                2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>

            {cartState.cart.length > 0 && (
              <span className="absolute -top-2 left-6 bg-red-600 text-white text-xs rounded-full px-2 py-[2px]">
                {cartState.cart.length}
              </span>
            )}
          </Link>

        </ul>
      )}

    </nav>
  );
};

export default Navbar;
