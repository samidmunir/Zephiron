import { useTheme } from "../../contexts/Theme";
import { ArrowRight, ShieldCheck, Star, Truck, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trustItems = [
  {
    id: 0,
    icon: <ShieldCheck />,
    title: "Quality Parts",
    desc: "Curated brands. Fitment-first. No guesswork.",
  },
  {
    id: 1,
    icon: <Wrench />,
    title: "Pro Installs",
    desc: "Clean work, tight tolerances, serious attention.",
  },
  {
    id: 2,
    icon: <Truck />,
    title: "Fast Fullfillment",
    desc: "Quick shipping and easy pickup options.",
  },
];

const TrustStrip = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  return (
    <main
      className={`transition-all duration-3000 ${
        isDark ? "bg-zinc-950/90" : "bg-zinc-50/90"
      }`}
    >
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-5 border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TrustStrip;
