import React, { ReactNode } from "react";

interface PhoneProps {
  children: ReactNode;
}

const Phone: React.FC<PhoneProps> = ({ children }) => {
  return <div className="iphone-x">{children}</div>;
};

export default Phone;
