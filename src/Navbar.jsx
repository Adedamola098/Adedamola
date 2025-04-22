import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import HireMe from './Hireme';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true; // Default to dark
    }
    return true; // SSR fallback
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navLinks = ['home', 'about', 'services', 'projects', 'pricing', 'contact', 'blog'];

  return (
    <>
      <nav className="bg-white dark:bg-[#1f1f1f] dark:text-white text-black shadow-md fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/Snapchat-649279938.jpg"
              alt="Profile"
              className="rounded-full w-14 h-14 object-cover"
            />
            <div>
              <h1 className="text-lg font-bold">Adegboyega Adedamola</h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-gray-400 cursor-pointer transition-all capitalize"
              >
                {item}
              </Link>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:opacity-80 font-semibold"
            >
              Hire Me
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme}>
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col space-y-4 text-lg font-medium">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-400 cursor-pointer capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-black dark:bg-white text-white dark:text-black py-2 rounded hover:opacity-80 font-semibold"
              >
                Hire Me
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal */}
      <HireMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
