import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface ProfileProps {
  type: "icon" | "label";
}

const Profile = (props: ProfileProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  if (props.type === "icon") {
    return (
      <button onClick={() => navigate("/auth")} className="cursor-pointer">
        <User
          className={`w-6 h-6 ${
            isDark ? "hover:text-rose-500" : "hover:text-sky-500"
          } transition-all duration-500
          }`}
        />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => navigate("/login")}
        className="rounded-full flex items-center gap-2"
        aria-label="User"
      >
        <User
          className={`w-6 h-6 ${
            isDark ? "hover:text-rose-500" : "hover:text-sky-500"
          } transition-all duration-500
          }`}
        />
        <p>Login</p>
      </button>
    );
  }
};

export default Profile;
