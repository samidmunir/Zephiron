import { useTheme } from "../context/Theme";

interface PricingCardProps {
  id: number;
  name: string;
  price: number;
  summary: string;
  features: string[];
}

const PricingCard = (props: PricingCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`rounded-md p-8 shadow-2xl sm:max-w-lg mx-auto hover:scale-105 transition-all duration-1000 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section>
        <div>
          <h1
            className={`text-4xl text-center font-semibold ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {props.name}
          </h1>
        </div>
        <div className="my-4">
          <h2
            className={`text-5xl text-center font-bold ${
              isDark ? "text-[#46a8de]" : "text-[#0e4e87]"
            }`}
          >
            ${props.price}/mo
          </h2>
        </div>
        <div className="my-4">
          <p
            className={`text-2xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {props.summary}
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            {props.features.map((feature) => (
              <li
                className={`text-xl ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className={`px-2 py-1 text-xl font-semibold border-2 rounded-md transition-all duration-1000 ${
              isDark
                ? "border-[#46a8de] text-[#46a8de] hover:bg-[#46a8de] hover:text-gray-100"
                : "border-[#0e4e87] text-[#0e4e87] hover:bg-[#0e4e87] hover:text-gray-100"
            }`}
          >
            Get Started
          </button>
          <button
            className={`px-2 py-1 text-xl font-semibold border-2 rounded-md transition-all duration-1000 ${
              isDark
                ? "border-[#46a8de] text-[#46a8de] hover:bg-[#46a8de] hover:text-gray-100"
                : "border-[#0e4e87] text-[#0e4e87] hover:bg-[#0e4e87] hover:text-gray-100"
            }`}
          >
            Upgrade
          </button>
        </div>
      </section>
    </main>
  );
};

export default PricingCard;
