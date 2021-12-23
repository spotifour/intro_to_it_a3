import React from "react";
import "./header.css";
import { BsGithub } from "react-icons/bs";

import Button from "../Button/Button";

const Header = (props) => {
  return (
    <div className="header">
      <header className="nav">
        <h2 className="teamName">
          {/* <img className='logoImage' src='trans.png' alt='Logo'></img> */}
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
            Skills and jobs
          </a>
          <a className="navItem" href="/groupReflection">
            Group reflection
          </a>
          <a className="navItem" href="/reference">
            References
          </a>
        </div>
      </header>
      <div className="banner">
        <h1 className="title">Intro to IT</h1>
        <h1 className="title">Assignment 3: Our IT Project</h1>
        <div className="intro">
          <img className="logo" src={"logo2.png"} alt="Logo" />
          <a href="https://github.com/spotifour/intro_to_it_a3">
          <Button>
            <BsGithub className='buttonIcon'/>
            GitHub's Repository
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
