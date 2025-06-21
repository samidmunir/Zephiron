import { motion, useScroll } from "framer-motion";
// import { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 h-1 w-full origin-left z-[1000] rounded-full shadhow-md transition-all duration-1000 ${
        isDark
          ? "bg-gradient-to-r from-rose-500 via-sky-500 to-zinc-100"
          : "bg-gradient-to-r from-sky-500 via-rose-500 to-zinc-100"
      }`}
    />
  );
};

export default ScrollBar;
