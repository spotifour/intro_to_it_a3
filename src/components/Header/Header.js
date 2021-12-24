import React from "react";
import "./header.css";

const Header = (props) => {
  return (
      <header className="nav">
        <h2 className="teamName">
          <a href="/">spotifour</a>
        </h2>
        <div className="navItems">
          <a className="navItem" href="/teamProfile">
            Team Profile
          </a>
          <a className="navItem" href="/tools">
            Tools
          </a>
          <a className="navItem" href="/projectDescription">
            Project Description
          </a>
          <a className="navItem" href="/SkillsAndJobs">
            Skills And Jobs
          </a>
          <a className="navItem" href="/groupReflection">
            Group Reflection
          </a>
          <a className="navItem" href="/references">
            References
          </a>
        </div>
      </header>
  );
};

export default Header;
