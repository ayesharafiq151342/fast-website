"use client";

import { useEffect, useState, useRef } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  startCounting: boolean; // New prop
};

const Counter = ({ end, suffix = "", duration = 2000, startCounting }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start when triggered

    let start = 0;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [end, duration, startCounting]);

  return (
    <div className="text-3xl font-bold text-white">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// Main Component
const Visa_counter = () => {
  const stats = [
    { number: 95, text: "Visa Approval Rate", suffix: "%" },
    { number: 1000, text: "Successful Cases", suffix: "+" },
    { number: 50, text: "Countries Covered", suffix: "+" },
    { number: 15, text: "Years Experience", suffix: "+" },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[var(--accent)] py-20 w-96 lg:w-96 xl:w-full m-auto rounded-lg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Our Achievements
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-white/80">
          We take pride in delivering quality services and building long-term
          relationships with our clients around the world.
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Counter
                end={stat.number}
                suffix={stat.suffix}
                startCounting={startCounting}
              />
              <p className="mt-2 text-lg font-medium text-white">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visa_counter;
