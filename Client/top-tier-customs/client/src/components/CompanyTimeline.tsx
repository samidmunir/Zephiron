import { useTheme } from "../context/Theme";

const timelineEvents = [
  {
    year: "2021",
    title: "Founded",
    description:
      "TT-Customs was founded with a mission to elevate vehicle customization and performance.",
  },
  {
    year: "2022",
    title: "First Shop Opened",
    description:
      "Opened our first shop and began serving car enthusiasts across the city.",
  },
  {
    year: "2023",
    title: "100+ Projects Completed",
    description:
      "Crossed 100 high-quality vehicle projects including ambient lighting, starlight ceilings, and more.",
  },
  {
    year: "2024",
    title: "Expanded Team",
    description:
      "Welcomed new technicians and designers to bring more creativity and craftsmanship.",
  },
  {
    year: "2025",
    title: "Product Line Launch",
    description:
      "Launched our premium TT-Customs product line featuring exclusive lighting kits and accessories.",
  },
];

const CompanyTimeline = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`px-4 py-12 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      } transition-all duration-1000`}
    >
      <h2 className="text-4xl font-bold text-center uppercase mb-12">
        Our Journey
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="hidden lg:block absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-rose-500 via-sky-500 to-purple-500 transform -translate-x-1/2 opacity-40" />

        <div className="flex flex-col lg:grid lg:grid-cols-9 gap-10">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`lg:col-span-4 px-4 relative ${
                  isLeft ? "lg:col-start-1" : "lg:col-start-6"
                }`}
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 dark:from-zinc-800 dark:to-zinc-600 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-semibold text-sky-400">
                    {event.year}
                  </h3>
                  <p className="text-lg font-bold mb-1">{event.title}</p>
                  <p className="text-sm text-zinc-300 dark:text-zinc-400">
                    {event.description}
                  </p>
                </div>

                {/* Connector dot */}
                <div className="absolute lg:left-1/2 lg:top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-sky-500 to-rose-500 border-4 border-zinc-900 rounded-full z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
