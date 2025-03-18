import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesignServicesScroll = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const services = [
    {
      number: "01",
      title: "SNAPCHAT",
      description:
        "Sociallywired collaborates with Snap to source and secure top-tier talent for Discover Shows. Once approved, we manage the entire process, including re-editing and optimizing YouTube content, conducting A/B testing on thumbnails, and analyzing performance data to drive exceptional outcomes.",
    },
    {
      number: "02",
      title: "META",
      description:
        "At @SWinc, we understand the power of platform-specific content to achieve maximum impact. We unlock new revenue opportunities by tailoring your content for Facebook’s unique ecosystem. From short-form content on Facebook Reels to leveraging lesser-known bonus features, we ensure your content thrives and delivers exceptional results.",
    },
    {
      number: "03",
      title: "TIKTOK",
      description:
        "Short-form content is here to stay, but monetizing it can be a challenge. At Sociallywired, we specialize in localizing and repurposing your short-form content for platforms like YouTube Shorts, Snap, and Facebook Reels, transforming your passion into a profitable venture.",
    },
    {
      number: "04",
      title: "YOUTUBE",
      description:
        "Sociallywired offers expert YouTube Shorts Management services, transforming your existing content into engaging short-form videos tailored for YouTube Shorts. With our in-depth knowledge and expertise, we create captivating Shorts optimized for the platform's unique format, driving millions of views and maximizing your reach.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first fully visible section
        const firstVisible = entries.find((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5);
        
        if (firstVisible) {
          const index = sectionRefs.current.findIndex((el) => el === firstVisible.target);
          setActiveSection(index);
        } else {
          setActiveSection(null);
        }
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen flex">
      {/* Fixed number section */}
      <div className="fixed top-0 left-0 w-1/4 h-screen flex items-center justify-center pointer-events-none z-10">
        <AnimatePresence mode="wait">
          {activeSection !== null && (
            <motion.div
              key={activeSection}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[180px] md:text-[240px] font-bold leading-none tracking-tighter"
            >
              {services[activeSection]?.number}
            </motion.div>
          )}
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
