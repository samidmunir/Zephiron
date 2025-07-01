import { useTheme } from "../context/Theme";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "Absolutely blown away by the quality and attention to detail. TT Customs transformed my car into a beast.",
  },
  {
    name: "Jason T.",
    feedback:
      "Quick service and flawless installation. The team knew exactly what I needed.",
  },
  {
    name: "Lena R.",
    feedback:
      "Their recommendations on performance upgrades were spot on. My ride handles like a dream now!",
  },
  {
    name: "Alex W.",
    feedback:
      "Super professional, highly recommended for anyone serious about car customization.",
  },
];

const TestimonialsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`pt-28 px-6 pb-16 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <section className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          What Our Customers Say
        </motion.h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Real stories from passionate drivers and modders just like you.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl shadow-md border ${
              isDark
                ? "bg-zinc-900 border-zinc-700"
                : "bg-white border-zinc-200"
            }`}
          >
            <p className="text-lg italic">"{t.feedback}"</p>
            <p className="mt-4 text-sm font-semibold text-right">— {t.name}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default TestimonialsPage;
