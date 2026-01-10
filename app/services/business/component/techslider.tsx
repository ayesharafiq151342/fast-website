"use client";

const techIcons = [
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "PostgreSQL",
    image: "/services/postgres.jpg",
  },
  {
    name: "ReactJS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "AWS",
        image: "/services/aws.png",
  },
  {
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export default function TechPage() {
  return (
    <main className="  xl:w-8/12 m-auto flex items-center justify-center">
      <section className="w-full  overflow-hidden">

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-16">
          Technologies <span className="text-[var(--accent)]">We Use</span> 
        </h1>

        {/* Slider */}
        <div className="relative w-full overflow-hidden marquee-wrapper">
          <div className="flex items-center gap-24 animate-marquee whitespace-nowrap px-6">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[140px] group"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="mt-3 text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
