import { useTheme } from "../context/Theme";
import hero from "../assets/hero.jpg";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  // const textPrimColor = isDark ? "text-gray-100" : "text-gray-800";
  // const textSecColor = isDark ? "text-gray-300" : "text-gray-600";
  // const accentColor = isDark ? "text-[#46a8de]" : "text-[#0e4e87]";

  return (
    <main
      className={`w-full transition-all duration-3000 ${
        isDark ? "bg-gray-950" : "bg-gray-100"
      }`}
    >
      <section className="max-w-full mx-auto flex flex-col items-center">
        <img src={hero} alt="CareerNest Logo" className="w-full" />
        <div className="absolute sm:left-6 sm:top-48 2xl:left-32 2xl:top-120 transition-all duration-1000">
          <h1
            className={`sm:text-3xl 2xl:text-7xl font-extrabold text-gray-800 leading-tight`}
          >
            Organize Your Job Search
            <br /> with <span className="text-[#0e4e87]">CareerNest</span>
          </h1>
          <p
            className={`text-gray-900 sm:text-lg sm:max-w-xs 2xl:text-3xl 2xl:max-w-2xl my-4`}
          >
            Track your job applications, prepare for inteviews, and gain key
            insights - all from one clean, focused dashboard.
          </p>
          <div className="flex items-center gap-4 2xl:text-2xl">
            <button
              className={`border-2 rounded-md border-gray-900 px-2 py-1 font-semibold hover:bg-gray-900 hover:text-gray-100 transition-all duration-1000`}
            >
              Get Started
            </button>
            <button
              className={`border-2 rounded-md border-gray-900 px-2 py-1 font-semibold hover:bg-gray-900 hover:text-gray-100 transition-all duration-1000`}
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
