import { useTheme } from "../../contexts/ThemeContext";
import { useUserStore } from "../../stores/UserStore";

const Logout = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { logout } = useUserStore();
  return (
    <button
      onClick={logout}
      className={`text-lg font-semibold border-2 rounded-md px-2 ${
        isDark ? "border-gray-100" : "border-gray-900"
      } hover:scale-105 cursor-pointer`}
    >
      Logout
    </button>
  );
};

export default Logout;
