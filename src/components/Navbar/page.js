"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems } from './menuItems.';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-600 to-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
     
        <div className="text-3xl font-extrabold text-white">
          <Link href="/">SHOP</Link>
        </div>

   
        <div className="space-x-6 hidden md:flex">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-white text-lg hover:text-yellow-300 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

     
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

     
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-40`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              className="text-lg hover:text-yellow-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

export default Navbar;
