import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate scale based on scroll position
  const scale = 1 + scrollY / 1000; // Adjust the divisor for faster/slower scaling

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/677293726dfc109824ba19f2/67729659a41d9ab32d8a1033_pexels-rostislav-5011647.webp"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{
            transform: `scale(${scale})`, // Apply dynamic scaling
            transition: "transform 0.1s ease-out", // Smooth transition
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-950/50 z-10"></div>
      </div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
        {/* Main heading */}
        <div className="relative">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-[First,Arial,sans-serif] tracking-wider font-bold mb-4">
            VECTORY
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mt-8 tracking-wide">
          WE CRAFT VISUAL EXPERIENCES THAT MAKE
          <br />
          <span className="font-medium">@BRANDS UNFORGETTABLE</span>
        </p>
      </div>

      {/* Overlay gradient at bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent z-20"></div>
    </div>
  );
};

export default Hero;
