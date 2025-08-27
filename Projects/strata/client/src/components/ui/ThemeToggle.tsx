import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/Theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-1500`}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-orange-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
