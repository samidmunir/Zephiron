import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = theme === "dark" ? "bg-blue-500" : "bg-blue-600";

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className={`h-full ${bgColor} transition-all duration-150 ease-in-out`}
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
