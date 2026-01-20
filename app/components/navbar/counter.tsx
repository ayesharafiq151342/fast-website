"use client";

import { useEffect, useState, useRef } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  startCounting: boolean;
};

const Counter = ({ end, suffix = "", duration = 2000, startCounting }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

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
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// Main Component
const StatsCounter = () => {
  const stats = [
    { number: 500, text: "Happy Clients", suffix: "+" },
    { number: 10000, text: "Projects Completed", suffix: "+" },
    { number: 15, text: "Years Experience", suffix: "+" },
    { number: 99, text: "Satisfaction Rate", suffix: "%" },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[var(--accent)] py-20 w-full rounded-lg"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Our Achievements
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-white/80 text-sm sm:text-base">
          We take pride in delivering quality services and building long-term
          relationships with our clients around the world.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Counter
                end={stat.number}
                suffix={stat.suffix}
                startCounting={startCounting}
              />
              <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-white text-center">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
