import { useTheme } from "../../context/Theme";
import { LogOut } from "lucide-react";
import { useAuth } from "../../context/Auth";

interface LogoutProps {
  type: "icon" | "label";
}

const Logout = (props: LogoutProps) => {
  const { logout } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (props.type === "icon") {
    return (
      <button onClick={logout}>
        <LogOut
          className={`w-6 h-6 ${
            isDark && "hover:text-indigo-500"
          } hover:text-blue-600 cursor-pointer`}
        />
      </button>
    );
  } else {
    return (
      <button
        onClick={logout}
        className="rounded-full flex items-center gap-2"
        aria-label="Logout"
      >
        <p className="font-semibold">Logout</p>
        <LogOut className="w-6 h-6" />
      </button>
    );
  }
};

export default Logout;
