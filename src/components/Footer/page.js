import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-3 bottom-0 mt-10 w-full left-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SHOP</h2>
          <p className="text-sm">
          Every thing has a story.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Documentation</a></li>
            <li><a href="#" className="hover:text-yellow-400">Reference</a></li>
            <li><a href="#" className="hover:text-yellow-400">Support</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-sky-400">
              <i className="fab fa-facebook-f hover:text-white"></i>
            </a>
            <a href="#" className="text-white hover:text-sky-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-sky-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-sky-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2025  All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
