import React from "react";
import { useTheme } from "../contexts/Theme";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

type PrimaryProps = {
  children: React.ReactNode;
};

const Primary: React.FC<PrimaryProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <main
        className={`${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        } transition-all duration-3000`}
      >
        {children}
      </main>
    </main>
  );
};

export default Primary;
