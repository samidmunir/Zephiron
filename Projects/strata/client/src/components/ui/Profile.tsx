import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/Theme";

interface ProfileProps {
  type: "icon" | "label";
  onClick: () => void;
}

const Profile = (props: ProfileProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? "text-orange-400" : "text-blue-600";

  const navigate = useNavigate();
  const location = useLocation();

  if (props.type === "icon") {
    return (
      <button
        onClick={() => navigate("/auth")}
        className={`cursor-default ${location.pathname === "/auth" && accent}`}
      >
        <User
          className={`w-6 h-6 ${
            isDark
              ? "text-zinc-500 hover:text-orange-400"
              : "text-zinc-800 hover:text-blue-600"
          } transition-all duration-1500
          }`}
        />
      </button>
    );
  } else {
    return (
      <button
        // onClick={() => navigate("/auth")}
        onClick={() => {
          props.onClick();
          navigate("/auth");
        }}
        className={`${
          location.pathname === "/auth" && "text-rose-500"
        } rounded-full flex items-center gap-2 ${
          isDark ? "hover:text-rose-500" : "hover:text-sky-500"
        } transition-all duration-500`}
        aria-label="User"
      >
        <User
          className={`w-6 h-6
          }`}
        />
        <p className="font-semibold">Login</p>
      </button>
    );
  }
};

export default Profile;
