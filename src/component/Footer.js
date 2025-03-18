import { Link } from "react-router-dom";
import logo from "../assert/dark logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full max-w-4xl h-px bg-gray-200 mb-12"></div>

        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Vectory Logo"
            width="36"
            height="36"
            className="animate-spin-slow transition-opacity duration-300 hover:opacity-50"
            style={{ animation: "spin 4s linear infinite" }}
          />
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
            {["HOME", "ABOUT", "PORTFOLIO", "SERVICES", "BLOG", "CONTACT"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-black text-sm font-medium underline underline-offset-4 transition-all duration-300 hover:no-underline"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gray-200 mb-12"></div>
      </div>
    </footer>
  );
};

export default Footer;
