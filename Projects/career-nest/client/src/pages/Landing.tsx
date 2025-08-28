import { useTheme } from "../contexts/Theme";

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
        <header>
          <h1>Welcome to Career Nest</h1>
        </header>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

export default Landing;
