import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import funny from "../assert/funny.png";
import ray from "../assert/ray.png";
import olivia from "../assert/olivia.png";
import britany from "../assert/britany.png";
import jenny from "../assert/jenny.png";
import bahd from "../assert/bahd.jpg";

const ProjectCard = ({ title, subtitle, imageUrl, projectUrl, isActive }) => {
  return (
    <div
      className={`w-full h-screen mx-6 flex justify-center items-center transition-transform duration-700 ease-in-out ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      <Link to={projectUrl} className="group relative h-full w-full flex flex-col items-center justify-center">
        {/* Image container */}
        <div className="relative w-auto h-auto max-w-[80%] max-h-[80vh] flex items-center justify-center">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h3 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">{title}</h3>
          <p className="text-sm uppercase tracking-widest">{subtitle}</p>

          {/* Social Media Icons */}
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-white text-2xl hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-white text-2xl hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    { title: "Funny Mike", subtitle: "Creator", imageUrl: funny, projectUrl: "/" },
    { title: "Ray William", subtitle: "Creator", imageUrl: ray, projectUrl: "/" },
    { title: "Olivia Pierson", subtitle: "Creator", imageUrl: olivia, projectUrl: "/" },
    { title: "Brittany Furlan", subtitle: "Creator", imageUrl: britany, projectUrl: "/" },
    { title: "Jenny Farley", subtitle: "Creator", imageUrl: jenny, projectUrl: "/" },
    { title: "Bhad Bhabie", subtitle: "Creator", imageUrl: bahd, projectUrl: "/" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = containerRef.current.scrollTop;
      const screenHeight = window.innerHeight;
      const newIndex = Math.round(scrollY / screenHeight);

      setActiveIndex(newIndex);
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#020202]" >
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div key={index} className="h-screen snap-start flex justify-center items-center">
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
