"use client";

import { useEffect, useRef } from "react";

/* ================= Reviews Data ================= */
const reviews = [
  {
    name: "Ali Khan",
    role: "Printing Client",
    image: "/user/user1.jpg",
    rating: 5,
    review:
      "FAST Group transformed our digital presence completely. Their integrated approach saved us time and delivered exceptional results.",
  },
  {
    name: "Ayesha Malik",
    role: "Education Partner",
    image: "/user/user2.jpg",
    rating: 5,
    review:
      "The professionalism and expertise of FAST Group is unmatched. They're not just vendors, they're true partners in growth.",
  },
  {
    name: "Usman Raza",
    role: "Business Owner",
    image: "/user/user3.jpg",
    rating: 4,
    review:
      "From marketing to real estate, FAST Group's multi-industry expertise has been invaluable for our expansion strategy.",
  },
  {
    name: "Sara Ahmed",
    role: "Student",
    image: "/user/user4.jpg",
    rating: 4,
    review: "Great learning services and helpful staff.",
  },
];

/* ================= Stars Component ================= */
const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-[var(--accent)]" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.043 9.402c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.975z" />
      </svg>
    ))}
  </div>
);

/* ================= Reviews Component ================= */
export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;

    const autoScroll = () => {
      container.scrollLeft += 0.5;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 bg-[var(--bg-color)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--text-color)] mb-12">
          Success Stories Fuel <span className="text-[var(--accent)]">Our Innovation.</span>
        </h2>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x -mx-4 px-4"
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 snap-start"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent)]"
                />
                <div>
                  <h4 className="font-semibold text-[var(--primary-color)]">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>

              {/* Stars */}
              <Stars rating={item.rating} />

              {/* Review */}
              <p className="text-[var(--text-color)] leading-relaxed text-sm sm:text-base">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
