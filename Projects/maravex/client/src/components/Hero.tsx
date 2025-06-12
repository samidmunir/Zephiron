// import HeroImg from "../assets/hero.jpeg";
// import { useTheme } from "../context/Theme.tsx";

// const Hero = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   return (
//     <main className="h-[100vh]">
//       <section>
//         <img src={HeroImg} alt="Hero" className="z-0" />
//         <div
//           className={`absolute w-full h-full inset-0 z-10 top-20 ${
//             isDark && "bg-black/40"
//           }`}
//         ></div>
//         <div className="absolute top-1/2 left-2/3">
//           <h1 className={`text-6xl font-semibold`}>
//             Marave
//             <span className={`${isDark ? "text-sky-400" : "text-blue-600"}`}>
//               X
//             </span>
//           </h1>
//           <h2 className="text-3xl font-bold my-4">
//             Browse our premium catalog of{" "}
//             <span className={`${isDark ? "text-sky-400" : "text-blue-600"}`}>
//               Men's Fashion
//             </span>
//           </h2>
//           <div className="flex items-center gap-8">
//             <button className="px-2 py-1 border-2 border-sky-400 rounded-md">
//               Shop Categories
//             </button>
//             <button className="px-2 py-1 border-2 border-sky-400 rounded-md">
//               Shop Men's
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;

import HeroImg from "../assets/hero.jpeg";
import { useTheme } from "../context/Theme.tsx";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Conditional Dark Overlay */}
      {isDark && (
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-300" />
      )}

      {/* Hero Content */}
      <section className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg">
          Marave
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>X</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold my-4 text-white drop-shadow">
          Browse our premium catalog of{" "}
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>
            Men's Fashion
          </span>
        </h2>
        <div className="flex gap-6 mt-6">
          <button className="px-5 py-2 border-2 border-sky-400 text-white rounded-md hover:bg-sky-400 hover:text-black transition">
            Shop Categories
          </button>
          <button className="px-5 py-2 border-2 border-sky-400 text-white rounded-md hover:bg-sky-400 hover:text-black transition">
            Shop Men's
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
