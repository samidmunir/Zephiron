import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ToastContainer } from "react-toastify";
// import { useTheme } from "../context/Theme";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //   const { theme } = useTheme();

  return (
    <main>
      <Navbar />
      {/* <ToastContainer position="top-right" autoClose={3000} theme={theme} /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
