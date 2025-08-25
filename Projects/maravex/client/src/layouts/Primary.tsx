import React from "react";

type PrimaryProps = {
  children: React.ReactNode;
};

const Primary: React.FC<PrimaryProps> = ({ children }) => {
  return (
    <main>
      <main>{children}</main>
    </main>
  );
};

export default Primary;
