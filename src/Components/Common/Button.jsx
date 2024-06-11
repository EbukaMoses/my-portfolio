import React from "react";

const Button = ({ title, containerStyles, iconRight, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={` ${containerStyles}`}
    >
      {title}
      {/* {iconRight && <div className="ml-2">{iconRight}</div>} */}
    </button>
  );
};

export default Button;
