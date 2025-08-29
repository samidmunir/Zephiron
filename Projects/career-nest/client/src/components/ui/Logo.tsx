import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/Theme";
import { AiFillYuque } from "react-icons/ai";

const Logo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 hover:scale-110 transition-all duration-1500`}
    >
      <AiFillYuque
        className={`w-10 h-10 border-2 rounded-full p-1 ${
          isDark
            ? "border-orange-400 text-orange-400"
            : "border-blue-600 text-blue-600"
        } transition-all duration-1500`}
      />{" "}
      <h1
        className={`text-3xl font-medium ${
          isDark ? "text-zinc-700" : "text-zinc-950"
        } transition-all duration-1500`}
      >
        Career
        <span
          className={`${
            isDark ? "text-orange-400" : "text-blue-600"
          } transition-all duration-1500`}
        >
          Nest
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
