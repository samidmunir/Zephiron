import { Activity, Focus, FileText, NotebookPen, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useTheme } from "../context/Theme";

const featuresData = [
  {
    id: 0,
    title: "Job Tracking",
    feature: "Stay Organized",
    description:
      "Save and track each job application with notes, status, and deadlines - tailored to each kind of career.",
    icon: <NotebookPen className="w-12 h-12" />,
  },
  {
    id: 1,
    title: "Gain Clarity",
    feature: "Application Insights",
    description:
      "Visual dashboards help you track interview rates, offer ratios, and application trends.",
    icon: <Activity className="w-12 h-12" />,
  },
  {
    id: 2,
    title: "Scale With You",
    feature: "Tiered Features",
    description:
      "Get more power with Basic and Pro plans - from analytics to unlimited applications.",
    icon: <Focus className="w-12 h-12" />,
  },
  {
    id: 3,
    title: "Store What Matters",
    feature: "Resume Vault",
    description: "Upload and manage resumes and cover letters for quick reuse.",
    icon: <FileText className="w-12 h-12" />,
  },
  {
    id: 4,
    title: "Smart Job Recommendations",
    feature: "AI Job Pool",
    description:
      "Discover jobs that align with your goals - based on what similar users are applying to. Get personalized suggestions by role, industry, or location.",
    icon: <Zap className="w-12 h-12" />,
  },
];

const Features = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`w-full p-8 transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-4xl text-center font-semibold mb-8 ${
          isDark ? "text-[#46a8de]" : "text-[#0e4e87]"
        }`}
      >
        Features
      </h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            id={feature.id}
            title={feature.title}
            feature={feature.feature}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </section>
    </main>
  );
};

export default Features;
