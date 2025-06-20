import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/Theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full`}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-rose-500" />
      ) : (
        <Moon className="w-6 h-6 text-sky-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
