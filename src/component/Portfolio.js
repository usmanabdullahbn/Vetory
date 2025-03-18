import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, subtitle, imageUrl, projectUrl, isActive }) => {
  return (
    <div
      className={`w-full h-screen mx-6 flex justify-center items-center transition-transform duration-700 ease-in-out ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      <Link to={projectUrl} className="group relative block h-full w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h3 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">{title}</h3>
          <p className="text-sm uppercase tracking-widest">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      title: "ASPIRE",
      subtitle: "MOTION GRAPHICS",
      imageUrl:
        "https://cdn.prod.website-files.com/677293726dfc109824ba1a2a/6772c9d7bc768585649ed64c_milad-fakurian-wNsHBf_bTBo-unsplash-p-800.webp",
      projectUrl: "/project/aspire",
    },
    {
      title: "MINIMAL",
      subtitle: "ADVERTISING DESIGN",
      imageUrl:
        "https://cdn.prod.website-files.com/677293726dfc109824ba1a2a/6772c6d74a519b4f03acd480_milad-fakurian-DjjaZybYx4I-unsplash-p-800.webp",
      projectUrl: "/project/minimal",
    },
    {
      title: "EDGE",
      subtitle: "PACKAGING DESIGN",
      imageUrl:
        "https://cdn.prod.website-files.com/677293726dfc109824ba1a2a/6772c3b3b2e956bd6268cd01_milad-fakurian-PpgY7sjpf_0-unsplash-p-800.webp",
      projectUrl: "/project/edge",
    },
    {
      title: "APPAREL",
      subtitle: "PRINT DESIGN",
      imageUrl:
        "https://cdn.prod.website-files.com/677293726dfc109824ba1a2a/6772c391f87d0b4bbbf4c007_milad-fakurian-CdAmQAko9As-unsplash-p-800.webp",
      projectUrl: "/project/apparel",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Calculate current index based on scroll position
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
    <section className="relative w-full">
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-screen snap-start flex justify-center items-center"
          >
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
