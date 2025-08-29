import { useTheme } from "../contexts/Theme";
import { Boxes, ChartLine, CircleDollarSign, Cpu } from "lucide-react";

const features = [
  {
    id: 0,
    title: "Stay Organized",
    icon: <Boxes />,
    subtitle: "Seamless application tracking system.",
    description:
      "Keep all your job applications organized with key data attributes.",
  },
  {
    id: 1,
    title: "Data Driven Motivation",
    icon: <ChartLine />,
    subtitle: "Stay motivated with live data metrics.",
    description:
      "View your personalized user dashboard to gain insightful analysis on your job tracking journey.",
  },
  {
    id: 2,
    title: "Featured Pricing",
    icon: <CircleDollarSign />,
    subtitle: "Find the right subscription suited for your exact needs.",
    description:
      "Our free plan is generous and free forever. View the pricing section to see what is included!",
  },
  {
    id: 3,
    title: "Dynamic UI/UX",
    icon: <Cpu />,
    subtitle: "CareerNest is tailored to track any career.",
    description:
      "We are able to allow you to build a career's nest for any industry or field, with absolute ease.",
  },
];

const Landing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section
        className={`rounded-md ${
          isDark ? "bg-zinc-950" : "bg-zinc-200"
        } transition-all duration-1500`}
      >
        {/* HERO */}
        <header
          className={`px-8 py-4 rounded-md shadow-2xl space-y-4 ${
            isDark ? "bg-zinc-950" : "bg-zinc-200"
          } transition-all duration-1500`}
        >
          <h1
            className={`text-4xl leading-tight font-bold ${
              isDark ? "text-zinc-500" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            Stay Organized. Stay Motivated. <br /> Land Your Dream Job.
          </h1>
          <p
            className={`text-lg font-medium ${
              isDark ? "text-zinc-700" : "text-zinc-600"
            } transition-all duration-1500`}
          >
            CareerNest helps you track, visualize, and optimize your job search
            journey.
          </p>
          {/* CTA BUTTONS */}
          <div className="flex items-center gap-4">
            <button
              className={`text-lg font-semibold border-2 rounded-md px-2 py-1 ${
                isDark
                  ? "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-zinc-950"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-zinc-50"
              } transition-all duration-1500`}
            >
              Get Started
            </button>
            <button
              className={`text-lg font-semibold border-2 rounded-md px-2 py-1 ${
                isDark
                  ? "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-zinc-950"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
              } transition-all duration-1500`}
            >
              Learn More
            </button>
          </div>
        </header>
        {/* FEATURES */}
        <main
          className={`px-8 py-4 rounded-md shadow-2xl space-y-4 ${
            isDark ? "bg-zinc-950" : "bg-zinc-200"
          } transition-all duration-1500`}
        >
          <div>
            <h1
              className={`text-3xl text-center uppercase font-semibold ${
                isDark ? "text-zinc-700" : "text-zinc-800"
              } transition-all duration-1500`}
            >
              Features
            </h1>
            <p
              className={`text-md px-8 italic tracking-wide ${
                isDark ? "text-zinc-500" : ""
              } transition-all duration-1500`}
            >
              CareerNest provides you with a powerful yet simple way to manage
              and master your job hunt.
            </p>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* FEATURE CARD */}
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 border-2 rounded-md shadow-2xl hover:scale-105 space-y-2 ${
                  isDark
                    ? "border-zinc-700 hover:border-orange-400"
                    : "border-zinc-800 hover:border-blue-600"
                } transition-all duration-1500`}
              >
                <h1
                  className={`flex items-center justify-between text-xl font-semibold ${
                    isDark ? "text-sky-500" : "text-blue-600"
                  } transition-all duration-1500`}
                >
                  <span>{feature.title}</span>
                  {feature.icon}
                </h1>
                <h2
                  className={`text-lg ${
                    isDark ? "text-zinc-500" : "text-zinc-700"
                  } transition-all duration-1500`}
                >
                  {feature.subtitle}
                </h2>
                <h3
                  className={`text-sm ${
                    isDark ? "text-zinc-300" : "text-zinc-800"
                  } transition-all duration-1500`}
                >
                  {feature.description}
                </h3>
              </div>
            ))}
          </section>
        </main>
        <div></div>
      </section>
    </main>
  );
};

export default Landing;
