import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Copyright Section */}
        <div className="mb-4">
          <p className="text-sm md:text-base">&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li><Link to="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-gray-400 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gray-400 transition-colors">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gray-400 transition-colors">Admissions</Link></li>
            <li><Link to="/faculty" className="hover:text-gray-400 transition-colors">Faculty</Link></li>
            <li><Link to="/students" className="hover:text-gray-400 transition-colors">Students</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-400 transition-colors">Gallery</Link></li>
            <li><Link to="/contact-us" className="hover:text-gray-400 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
