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
      <button onClick={() => navigate("/login")}>
        <User
          className={`w-6 h-6 ${
            isDark && "hover:text-sky-400"
          } hover:text-blue-600`}
        />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => navigate("/login")}
        className="p-2 rounded-full flex items-center gap-2"
        aria-label="User"
      >
        <User className="w-6 h-6" />
        <p>Login</p>
      </button>
    );
  }
};

export default Profile;
