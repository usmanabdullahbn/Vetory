import React from "react";
import logo from "../assert/dark logo.svg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetConnect = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src={logo}
          alt="Background Logo"
          className="w-[80%] max-w-md animate-spin-slow"
          style={{ animation: "spin 4s linear infinite" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main heading */}
          <h2
            className="text-5xl md:text-7xl lg:text-[80px] font-normal leading-tight md:leading-[96px] text-black mb-12"
            style={{ fontFamily: "First, Arial, sans-serif" }}
          >
            LET&apos;S
            <br />
            CONNECT
          </h2>

          {/* Get in touch button */}
          <Link
            href="/contact"
            className="inline-flex items-center text-black text-sm font-medium border-b border-black pb-1 hover:pb-2 transition-all duration-300"
          >
            GET IN TOUCH
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </section>
  );
};

export default LetConnect;
