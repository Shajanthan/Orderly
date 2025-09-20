import React, { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 
                  hover:from-gray-600 hover:via-gray-700 hover:to-gray-800
                  text-white text-base py-3 px-6 rounded-lg font-semibold shadow-lg
                  w-full ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
