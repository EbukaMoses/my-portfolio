import React from "react";

const NavTab = ({ title, icon, onClick, active }) => {
  return (
    <div className="navtab" onClick={onClick}>
      <span>
        {icon && <div className="ml-2">{icon}</div>}
        {title}
      </span>
    </div>
  );
};

export default NavTab;
