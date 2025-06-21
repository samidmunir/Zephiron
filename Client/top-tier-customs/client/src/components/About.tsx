// import { useTheme } from "../context/Theme";
// import about_hero from "../assets/about-hero.jpg";
// // import about_hero_2 from "../assets/about-hero-2.jpg";
// import hero_left from "../assets/hero-left.jpg";
// import hero_right from "../assets/hero-right.jpg";

// interface WorkImageItem {
//   src: string;
//   alt: string;
//   description: string;
// }

// const workImages: WorkImageItem[] = [
//   {
//     src: "../../public/images/hero-left.jpg",
//     alt: "Image 1",
//     description: "Ambient lighting install AMG CLA45",
//   },
//   {
//     src: "../../public/images/hero-right.jpg",
//     alt: "Image 2",
//     description: "Ambient lighting install BMW 428i.",
//   },
//   {
//     src: "../../public/images/about-hero.jpg",
//     alt: "Image 3",
//     description: "Ambient lighting install Audi A8 Quattro",
//   },
//   {
//     src: "../../public/images/about-hero-2.jpg",
//     alt: "Image 4",
//     description: "Roof starlights install BMW 116d",
//   },
// ];

// const WorkImageGrid: React.FC = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       className={`px-4 py-8 ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//       }`}
//     >
//       <h1 className="text-4xl uppercase font-semibold text-center">Our Work</h1>
//       <div
//         className={`p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
//           isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//         }`}
//       >
//         {workImages.map((image, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-lg overflow-hidden group transition-all duration-1000"
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-1000"
//             />
//             <div
//               className={`p-4 text-center rounded-b-lg ${
//                 isDark ? "bg-zinc-900" : "bg-zinc-300"
//               }`}
//             >
//               <p
//                 className={`text-lg font-semibold ${
//                   isDark ? "text-rose-500" : "text-sky-500"
//                 }`}
//               >
//                 {image.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const About = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       className={`w-full ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
//       } transition-all duration-1000`}
//     >
//       <div className="p-4">
//         <h1 className="text-4xl text-center p-2 uppercase font-bold">
//           About TT-Customs
//         </h1>
//         <div className="flex justify-between items-center px-8 my-4">
//           <div className="flex-1/2">
//             <p className="text-3xl">
//               At TT Customs, we specialize in top-tier automotive products and
//               services that elevate both performance and aesthetics. Our mission
//               is to deliver excellecnce - every build, every time.
//             </p>
//             <div className="pl-4 py-2">
//               <h2 className="text-4xl my-2 font-semibold">Our Mission</h2>
//               <p
//                 className={`text-xl ${
//                   isDark ? "text-zinc-300" : "text-zinc-700"
//                 } italic`}
//               >
//                 We're dedicated to providing the highest quality car mods,
//                 customizations, and accessories. Whether you're looking to boost
//                 performance or turn heads - we're here to help you build your
//                 dream ride.
//               </p>
//             </div>
//             <div className="pl-4 py-2">
//               <h2 className="text-4xl my-2 font-semibold">Why Choose Us?</h2>
//               <ul className="text-xl">
//                 <li>✅ Premium handpicked products</li>
//                 <li>💯 Expert customization and installation</li>
//                 <li>⚡️ Fast, reliable, and trusted service</li>
//                 <li>🔹 Passion-driven team of car enthusiasts</li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex-1/2 flex justify-center gap-2">
//             <img
//               src={hero_right}
//               alt="About Us"
//               className="rounded-md w-[200px] inset-0 hover:scale-105 transition-all duration-1000"
//             />
//             <img
//               src={about_hero}
//               alt="About Us"
//               className="rounded-md w-[200px] inset-0 hover:scale-105 transition-all duration-1000"
//             />
//             {/* <img
//               src={about_hero_2}
//               alt="About Us"
//               className="rounded-md w-[200px] inset-0 object-scale-down"
//             /> */}
//             <img
//               src={hero_left}
//               alt="About Us"
//               className="rounded-md w-[200px] inset-0 hover:scale-105 transition-all duration-1000"
//             />
//             {/* <p className="relative text-rose-500 inset-0 z-60text-lg -top-20 left-85 uppercase">
//               Audi S5 Quattro
//             </p> */}
//           </div>
//         </div>
//       </div>
//       <WorkImageGrid />
//     </section>
//   );
// };

// export default About;

import { useTheme } from "../context/Theme";
import about_hero from "../assets/about-hero.jpg";
// import about_hero_2 from "../assets/about-hero-2.jpg";
import hero_left from "../assets/hero-left.jpg";
import hero_right from "../assets/hero-right.jpg";
import CompanyTimeline from "./CompanyTimeline";

interface WorkImageItem {
  src: string;
  alt: string;
  description: string;
}

const workImages: WorkImageItem[] = [
  {
    src: "../../public/images/hero-left.jpg",
    alt: "Image 1",
    description: "Ambient lighting install AMG CLA45",
  },
  {
    src: "../../public/images/hero-right.jpg",
    alt: "Image 2",
    description: "Ambient lighting install BMW 428i.",
  },
  {
    src: "../../public/images/about-hero.jpg",
    alt: "Image 3",
    description: "Ambient lighting install Audi A8 Quattro",
  },
  {
    src: "../../public/images/about-hero-2.jpg",
    alt: "Image 4",
    description: "Roof starlights install BMW 116d",
  },
];

const WorkImageGrid: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`px-4 py-8 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <h1 className="text-4xl uppercase font-semibold text-center">Our Work</h1>
      <div
        className={`p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
          isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
        }`}
      >
        {workImages.map((image, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden group transition-all duration-1000"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-1000"
            />
            <div
              className={`p-4 text-center rounded-b-lg ${
                isDark ? "bg-zinc-900" : "bg-zinc-200"
              }`}
            >
              <p
                className={`text-lg font-semibold ${
                  isDark ? "text-rose-500" : "text-sky-500"
                }`}
              >
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      } transition-all duration-1000`}
    >
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-4xl text-center p-2 uppercase font-bold">
          About TT-Customs
        </h1>

        {/* Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 md:px-8 my-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-2xl md:text-3xl mb-4">
              At TT Customs, we specialize in top-tier automotive products and
              services that elevate both performance and aesthetics. Our mission
              is to deliver excellence – every build, every time.
            </p>
            <div className="py-4">
              <h2 className="text-3xl md:text-4xl my-2 font-semibold">
                Our Mission
              </h2>
              <p
                className={`text-lg md:text-xl ${
                  isDark ? "text-zinc-300" : "text-zinc-700"
                } italic`}
              >
                We're dedicated to providing the highest quality car mods,
                customizations, and accessories. Whether you're looking to boost
                performance or turn heads – we're here to help you build your
                dream ride.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-3xl md:text-4xl my-2 font-semibold">
                Why Choose Us?
              </h2>
              <ul className="text-lg md:text-xl space-y-1">
                <li>✅ Premium handpicked products</li>
                <li>💯 Expert customization and installation</li>
                <li>⚡️ Fast, reliable, and trusted service</li>
                <li>🔹 Passion-driven team of car enthusiasts</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex justify-center flex-wrap gap-3">
            {[hero_right, about_hero, hero_left].map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt="About Us"
                className="rounded-md w-full max-w-[200px] hover:scale-105 transition-all duration-1000"
              />
            ))}
          </div>
        </div>
      </div>
      <WorkImageGrid />
      <CompanyTimeline />
    </section>
  );
};

export default About;
