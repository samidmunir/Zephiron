// src/components/NewsletterSignup.tsx
import { useTheme } from "../context/Theme";

const NewsletterSignup = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full px-6 md:px-16 py-20 ${
        isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Marave
          <span className={isDark ? "text-sky-400" : "text-blue-600"}>X</span>{" "}
          Club
        </h2>
        <p className="mb-8 text-zinc-500 dark:text-zinc-400">
          Get early access to drops, exclusive discounts, and fashion insights
          straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-3 rounded-md w-full sm:w-2/3 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
