import React from "react";
import bulb from "../assert/bulb-removebg-preview.png";
import heading from "../assert/logo.png";

const Hero = () => {
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Bulb Image with Swing and Glow Effect */}
      <div className="relative flex items-center justify-center">
      <div className="absolute w-44 h-44 bg-gradient-to-b from-[#0EADEE] via-[#5B56B0] to-[#723B8F] blur-3xl opacity-50 animate-pulse"></div>
        <img
          src={bulb}
          alt="Bulb"
          className="w-40 h-40 md:w-40 md:h-40 animate-swing"
        />
      </div>

      {/* Heading Image */}
      <div className="relative mt-6">
        <img
          src={heading}
          alt="Heading Logo"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-20deg); }
            100% { transform: rotate(0deg); }
          }
          
          .animate-swing {
            animation: swing 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
