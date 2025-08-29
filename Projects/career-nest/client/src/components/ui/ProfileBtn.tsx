import { useTheme } from "../../contexts/Theme";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/auth")}
      className={`flex items-center hover:scale-110 ${
        isDark ? "text-orange-400" : "text-blue-600"
      } transition-all duration-1500`}
    >
      <AiOutlineLogin className={`w-6 h-6 transition-all duration-1500`} />
    </button>
  );
};

export default ProfileBtn;
