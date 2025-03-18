import { Link } from "react-router-dom";
import logo from "../assert/logo.png";

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
            width="60"
            height="60"
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
