import React from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main>{children}</main>
      {/* FOOTER */}
    </main>
  );
};

export default Layout;
