import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {/* NAVBAR */}
      <main>{children}</main>
      {/* FOOTER */}
    </main>
  );
};

export default Layout;
