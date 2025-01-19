'use client';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 text-sm font-semibold transition duration-300 ${
          isActive
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-300 hover:text-blue-400'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-white">TeachEdu</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/courses">Courses</NavItem>
            <NavItem to="/books">Books</NavItem>
            <NavItem to="/articles">Articles</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavLink to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md hover:from-blue-600 hover:to-cyan-500">
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <span className="sr-only">Toggle Menu</span>
          {isOpen ? (
            <span className="text-2xl">✖</span> // Icône pour fermer
          ) : (
            <span className="text-2xl">☰</span> // Icône pour le menu
          )}
        </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/books">Books</NavItem>
          <NavItem to="/articles">Articles</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavLink to="/signup" className="block px-3 py-2 text-base font-medium text-center text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md hover:from-blue-600 hover:to-cyan-500">
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
