import React from "react";
import "./button.css";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
