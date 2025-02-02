// File: src/components/Button.jsx
import React from "react";

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);

export default Button;
