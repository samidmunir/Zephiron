import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../contexts/Theme";
// import ScrollBar from "../components/ui/ScrollBar";

type PrimaryProps = {
  children: React.ReactNode;
};

const Primary: React.FC<PrimaryProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      {/* <ScrollBar /> */}
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <main
        className={`${
          isDark ? "bg-zinc-900" : "bg-zinc-100"
        } transition-all duration-3000`}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </main>
  );
};

export default Primary;
