import React from "react";
import "./header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  )
};

export default Header;
