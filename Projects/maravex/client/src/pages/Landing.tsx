import { useTheme } from "../contexts/Theme";

const Landing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className={`min-h-screen w-full ${isDark ? "" : ""}`}>
      <h1>Landing Page</h1>
    </main>
  );
};

export default Landing;
