import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assert/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-white">
            <img
              src={logo}
              alt="Vectory Logo"
              width="36"
              height="36"
              className="animate-spin-slow"
              style={{ animation: "spin 4s linear infinite" }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8 text-white">
            <Link to="/cart" className="font-medium">
              CART
              <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs bg-white text-blue-900 rounded-full">
                0
              </span>
            </Link>
            <Link to="/" className="font-medium">
              HOME
            </Link>
            <Link to="/about" className="font-medium">
              ABOUT
            </Link>
            <Link to="/portfolio" className="font-medium">
              PORTFOLIO
            </Link>
          </div>
          <Link
            to="/contact"
            className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-sm hover:bg-white hover:text-blue-900 transition-colors"
          >
            LET&apos;S CONNECT
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 bg-opacity-95 py-4 px-6">
          <div className="flex flex-col space-y-4 text-white">
            <Link
              to="/cart"
              className="font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CART
              <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs bg-white text-blue-900 rounded-full">
                0
              </span>
            </Link>
            <Link
              to="/"
              className="font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/portfolio"
              className="font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-sm w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              LET&apos;S CONNECT
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
