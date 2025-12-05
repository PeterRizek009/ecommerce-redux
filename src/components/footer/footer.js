/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  const footerList = [
    [
      "0000-111-000-22",
      "Weekdays 09:30-18:00",
      "Weekends 12:00-13:00",
      "Holidays: Sat, Sun , National Holidays",
    ],
    ["Your Account", "Your Orders", "Your Addresses", "Your Lists"],
    ["About us", "Careers", "FAQs", "Contact US"],
  ];

  return (
    <footer className="text-gray-900 dark:text-white bg-[#F1EAFF] dark:bg-[#22092C] mt-8 border-t">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Customer Center */}
        <div>
          <h1 className="font-bold text-lg mb-4">Customer Center</h1>
          <ul className="space-y-2">
            {footerList[0].map((item) => (
              <li key={item} className="text-sm opacity-80 hover:opacity-100">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Shop with Us */}
        <div>
          <h1 className="font-bold text-lg mb-4">Shop with Us</h1>
          <ul className="space-y-2">
            {footerList[1].map((item) => (
              <li
                key={item}
                className="text-sm cursor-pointer hover:text-indigo-600 dark:hover:text-pink-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h1 className="font-bold text-lg mb-4">Company</h1>
          <ul className="space-y-2">
            {footerList[2].map((item) => (
              <li
                key={item}
                className="text-sm cursor-pointer hover:text-indigo-600 dark:hover:text-pink-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="font-semibold tracking-widest text-sm mb-4 uppercase">
            Subscribe to Newsletter
          </h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">

          <p className="text-sm">
            © 2024 MyStore —
            <a href="#" className="ml-1 hover:text-white">@closedcanvas</a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 sm:mt-0 text-gray-300">
            <a className="hover:text-white transition">
              <svg fill="currentColor" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            <a className="hover:text-white transition">
              <svg fill="currentColor" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            <a className="hover:text-white transition">
              <svg fill="none" stroke="currentColor" className="w-5 h-5">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <circle cx={17.5} cy={6.5} r={1} />
              </svg>
            </a>

            <a className="hover:text-white transition">
              <svg fill="currentColor" className="w-5 h-5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
