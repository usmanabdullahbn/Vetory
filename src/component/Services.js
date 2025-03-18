import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesignServicesScroll = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const services = [
    {
      number: "01",
      title: "IDENTITY DESIGN",
      subtitle: "BUILD A BRAND THAT STANDS OUT",
      description:
        "WE CRAFT MEMORABLE BRAND IDENTITIES THAT SPEAK TO YOUR AUDIENCE AND DEFINE YOUR BUSINESS. FROM LOGOS TO COMPREHENSIVE BRAND GUIDELINES, WE ENSURE EVERY ELEMENT WORKS HARMONIOUSLY TO TELL YOUR UNIQUE STORY AND MAKE YOUR BRAND UNFORGETTABLE.",
    },
    {
      number: "02",
      title: "PRINT DESIGN",
      subtitle: "BRING YOUR VISION TO LIFE ON PAPER",
      description:
        "MAKE A LASTING IMPRESSION WITH PROFESSIONALLY DESIGNED PRINT MATERIALS. WHETHER YOU NEED BROCHURES, BUSINESS CARDS, OR POSTERS, WE DELIVER DESIGNS THAT ARE VISUALLY STRIKING AND ALIGN WITH YOUR BRAND'S MESSAGE.",
    },
    {
      number: "03",
      title: "PACKAGING DESIGN",
      subtitle: "UNWRAP YOUR BRAND'S POTENTIAL",
      description:
        "ELEVATE YOUR PRODUCT'S APPEAL WITH INNOVATIVE PACKAGING DESIGNS THAT STAND OUT ON THE SHELF. WE COMBINE CREATIVITY AND FUNCTIONALITY TO CREATE DESIGNS THAT CAPTURE ATTENTION AND REFLECT YOUR BRAND'S ESSENCE.",
    },
    {
      number: "04",
      title: "MOTION GRAPHICS",
      subtitle: "BRING YOUR STORY TO LIFE",
      description:
        "TRANSFORM YOUR IDEAS INTO DYNAMIC, ANIMATED VISUALS THAT ENGAGE AND INFORM. FROM EXPLAINER VIDEOS TO SOCIAL MEDIA ANIMATIONS, OUR MOTION GRAPHICS ADD ENERGY AND IMPACT TO YOUR BRAND'S STORYTELLING.",
    },
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed number section */}
      <div className="fixed top-0 left-0 w-1/4 h-screen flex items-center justify-center pointer-events-none z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[180px] md:text-[240px] font-bold leading-none tracking-tighter"
          >
            {services[activeSection].number}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scrollable content section */}
      <div className="ml-[25%] w-3/4">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex flex-col justify-center py-16 border-b border-gray-200 last:border-b-0"
          >
            <div className="space-y-6 max-w-3xl">
              <div className="uppercase text-sm font-medium tracking-wider">{service.subtitle}</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{service.title}</h2>
              <p className="text-base md:text-lg uppercase">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignServicesScroll;
