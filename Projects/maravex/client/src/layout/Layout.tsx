import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
