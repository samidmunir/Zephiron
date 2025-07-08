import { useTheme } from "../context/Theme";

interface FeatureCardProps {
  id: number;
  title: string;
  feature: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = (props: FeatureCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`rounded-md p-8 shadow-2xl hover:scale-105 transition-all duration-1000 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section className="flex items-center justify-between">
        <div
          className={`flex items-center gap-2 ${
            isDark ? "text-[#46a8de]" : "text-[#0e4e87]"
          }`}
        >
          {props.icon}
          <h1 className="text-3xl font-bold">{props.title}</h1>
        </div>
        <div>
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-gray-300" : "text-gray-950"
            }`}
          >
            {props.feature}
          </h2>
        </div>
      </section>
      <div className="mt-4">
        <p className={`text-xl ${isDark ? "text-gray-500" : "text-gray-950"}`}>
          {props.description}
        </p>
      </div>
    </main>
  );
};

export default FeatureCard;
