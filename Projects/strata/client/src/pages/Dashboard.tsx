import { useTheme } from "../contexts/Theme";

const Dashboard = () => {
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
        <h2>USER DASHBOARD</h2>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Dashboard;
