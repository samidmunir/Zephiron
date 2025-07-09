import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface ProfileProps {
  type: "icon" | "label";
}

const Profile = (props: ProfileProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const location = useLocation();

  if (props.type === "icon") {
    return (
      <button
        onClick={() => navigate("/auth")}
        className={`text-[#0e4e87] cursor-pointer p-2 rounded-full ${
          location.pathname === "/auth" && "text-rose-500"
        }`}
      >
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
        // onClick={() => navigate("/auth")}
        onClick={() => {
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
