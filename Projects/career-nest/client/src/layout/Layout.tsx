import React from "react";
import { useTheme } from "../context/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main>
      <Navbar />
      <section
        className={`${
          isDark ? "bg-gray-900" : "bg-gray-50"
        } transition-all duration-3000`}
      >
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
