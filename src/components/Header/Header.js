import React from "react";
import "./header.css";

import { sections } from "../../constants/other";

const Header = (props) => {
  const navItems = sections.map((section) => {
    return (
      <a className="navItem" href={section.path}>
        {section.name}
      </a>
    );
  });
  return (
    <header className="nav">
      <h2 className="teamName">
        <a href="/">spotifour</a>
      </h2>
      <div className="navItems">
        {navItems}
      </div>
    </header>
  );
};

export default Header;
