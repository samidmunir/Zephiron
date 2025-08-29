import { motion } from "framer-motion";
import { useTheme } from "../../contexts/Theme";
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={toggleTheme}
      className={`hover:scale-110 ${
        isDark ? "" : ""
      } transition-all duration-1500`}
    >
      {isDark ? (
        <AiOutlineBulb className={`w-6 h-6 text-orange-400`} />
      ) : (
        <AiFillBulb className={`w-6 h-6 text-blue-600`} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
