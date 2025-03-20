import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      {/* Design Statement Section */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 pt-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-black">Amplify Optimize Monetize </span>
            <span className="text-gray-400">Your Social Platforms</span>
          </h1>
          
          <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">
            Sociallywiredinc is a group of dedicated and innovative social media management experts that works with various content creators to help them raise the scope and reach of their platforms through curated, engaging content and optimized media marketing strategies. We owe our success to our ability to use ever-evolving approaches to create personalized game plans for each client and their target demographic.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center mt-8 text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            ABOUT US <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
