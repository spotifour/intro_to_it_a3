import React from "react";
import "./banner.css";

import { BsGithub } from "react-icons/bs";

import Button from "../Button/Button";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1 className="title">Intro to IT - Assignment 3: Our IT Project</h1>
      <div className="intro">
        <img className="logo" src={"logo2.png"} alt="Logo" />
        <a href="https://github.com/spotifour/intro_to_it_a3">
          <Button>
            <BsGithub className="buttonIcon" />
            GitHub's Repository
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
