import React from 'react'
import logo from '../assets/logo.png'

type Page = 'home' | 'about' | 'products' | 'contact'

interface NavbarProps {
  currentPage: Page
  setCurrentPage: (page: Page) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar bg-white shadow-md py-2 px-4">
      <div className="navbar-container flex justify-between items-center">
        <div className="navbar-brand flex items-center space-x-2">
  <img
    src={logo}
    alt="Biosalim Logo"
    className="h-8 w-auto object-contain"
  />
</div>

        <div className="navbar-links space-x-4">
          <button
            className={`nav-button ${currentPage === 'home' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            className={`nav-button ${currentPage === 'about' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('about')}
          >
            About Us
          </button>
          <button
            className={`nav-button ${currentPage === 'products' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('products')}
          >
            Our Products
          </button>
          <button
            className={`nav-button ${currentPage === 'contact' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
