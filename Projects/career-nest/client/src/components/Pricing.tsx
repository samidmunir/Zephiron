import { useTheme } from "../context/Theme";
import PricingCard from "./PricingCard";

const planData = [
  {
    id: 0,
    name: "Free",
    price: 0.0,
    summary: "Get started for free with job tracking made easy!",
    features: [
      "✅ Track up to 25 applications",
      "❌ Analytics Dashboard",
      "❌ Resume Vault",
      "❌ AI Job Pool",
    ],
  },
  {
    id: 1,
    name: "Basic",
    price: 5.0,
    summary:
      "An economical plan with insightful data metrics & more applications allowance.",
    features: [
      "✅ Track up to 50 applications",
      "✅ Basic Analytics Dashboard",
      "❌ Resume Vault",
      "❌ AI Job Pool",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 10.0,
    summary:
      "Enrich your job application tracking process with a premium suite of dashboard analytics, AI-recommended job postings, and engage with a community of fellow nesters!",
    features: [
      "✅ Track up to 100 applications",
      "✅ Advanced Analytics Dashboard",
      "✅ Resume Vault",
      "✅ AI Job Pool",
    ],
  },
];

const Pricing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`w-full p-8 transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-4xl text-center font-semibold ${
          isDark ? "text-[#46a8de]" : "text-[#0e4e87]"
        }`}
      >
        Pricing Plans
      </h1>
      <h2
        className={`text-xl text-center font-semibold my-2 ${
          isDark ? "text-gray-300" : "text-[#0e4e87]"
        }`}
      >
        Simple pricing, built for every job seeker
      </h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {planData.map((plan) => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            name={plan.name}
            price={plan.price}
            summary={plan.summary}
            features={plan.features}
          />
        ))}
      </section>
    </main>
  );
};

export default Pricing;
