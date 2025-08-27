import { useTheme } from "../contexts/Theme";
// import { motion } from "framer-motion";
// import { FlameKindling } from "lucide-react";

const Landing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section>
        <h1>Welcome to Strata!</h1>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Landing;
