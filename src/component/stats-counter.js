"use client"

import { useState, useEffect } from "react"
import CountUp from "react-countup";


const StatsCounter = () => {
  const [startCounting, setStartCounting] = useState(false)
  const AnimatedNumber = ({end}) => {
    return  (
      <CountUp start={0} end={end} duration={0.5} separator="," />
    )
  };

  const statsData = [
    {
      id: 1,
      value: 500,
      unit: "Million+",
      label: "Monthly",
      subLabel: "Story Views",
    },
    {
      id: 2,
      value: 50,
      unit: "Million+",
      label: "Unique",
      subLabel: "Audience",
    },
    {
      id: 3,
      value: 50,
      unit: "+",
      label: "Creators",
      subLabel: "We Represent",
    },
    {
      id: 4,
      value: 500,
      unit: "Million+",
      label: "Monthly",
      subLabel: "Video Views",
    },
  ]

  useEffect(() => {
    // Start the animation when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-counter")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.disconnect()
    }
  }, [])

  return (
    <div id="stats-counter" className="w-full bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {statsData.map((item) => (
          <div key={item.id} className="text-center">
            <h2 className="text-purple-500 text-4xl md:text-5xl font-bold">
              <AnimatedNumber end={item.value} startCounting={startCounting} />
              {item.unit}
            </h2>
            <p className="mt-2">
              {item.label}
              <br />
              {item.subLabel}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default StatsCounter

