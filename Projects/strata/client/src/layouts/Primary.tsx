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

  return (
    <main>
      {/* <ScrollBar /> */}
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <section>{children}</section>
      {/* <Footer /> */}
    </main>
  );
};

export default Primary;
