import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:underline">Springdale Public School</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-white focus:outline-none"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/about-us', label: 'About Us' },
            { path: '/academics', label: 'Academics' },
            { path: '/admissions', label: 'Admissions' },
            { path: '/faculty', label: 'Faculty' },
            { path: '/students', label: 'Students' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/contact-us', label: 'Contact Us' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block md:inline-block px-4 py-2 rounded text-center ${location.pathname === path ? 'bg-blue-700' : ''} hover:bg-blue-600`}
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'} bg-blue-800`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about-us', label: 'About Us' },
          { path: '/academics', label: 'Academics' },
          { path: '/admissions', label: 'Admissions' },
          { path: '/faculty', label: 'Faculty' },
          { path: '/students', label: 'Students' },
          { path: '/gallery', label: 'Gallery' },
          { path: '/contact-us', label: 'Contact Us' }
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`block px-4 py-2 rounded text-center ${location.pathname === path ? 'bg-blue-700' : ''} hover:bg-blue-600`}
            onClick={() => setIsNavOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
