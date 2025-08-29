import React from "react";
import { useTheme } from "../contexts/Theme";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

type PrimaryProps = {
  children: React.ReactNode;
};

const Primary: React.FC<PrimaryProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <main>
      <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default Primary;
