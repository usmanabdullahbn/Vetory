import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      {/* Design Statement Section */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-black">
              WE BELIEVE THAT GREAT DESIGN DOESN'T JUST LOOK GOOD —{" "}
            </span>
            <span className="text-gray-400">
              IT TELLS A STORY, SPARKS EMOTION, AND DRIVES RESULTS.
            </span>
          </h1>

          <Link
            to="/about"
            className="inline-flex items-center mt-8 text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            ABOUT US <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 w-full"></div>
      </div>
    </main>
  );
};

export default About;
