import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing social icons
import logo from "../assert/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Vectory Logo" width="60" height="60" />
          
        </Link>
        

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8 text-white">
            <Link to="/cart" className="font-medium">SERVICES</Link>
            <Link to="/" className="font-medium">WORK</Link>
            <Link to="/about" className="font-medium">ABOUT</Link>
            <Link to="/portfolio" className="font-medium">CONTACT</Link>
          </div>
          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-white text-xl">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 bg-opacity-95 py-4 px-6">
          <div className="flex flex-col space-y-4 text-white">
            <Link to="/cart" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>CART</Link>
            <Link to="/" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/portfolio" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link>
            
            {/* Social Icons for Mobile */}
            <div className="flex items-center justify-center space-x-6 text-white text-2xl mt-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
