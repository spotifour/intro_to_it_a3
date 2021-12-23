import React from "react";
import "./Tools.css";

import { comment } from "../../constants/tools";

const Tools = (props) => {
  return (
    <div>
      <h1 className="sectionTitle">Tools</h1>
      <h2 className="sectionTitle">Links</h2>
      <ul>
        <li className="toolsText">
          Website's link:
          <span>
            <a href="/">
              <p className="toolsLink">
                https://spotifour.github.io/intro_to_it_a3/
              </p>
            </a>
          </span>
        </li>
        <li className="toolsText">
          Website's GitHub repository:
          <a href="https://github.com/spotifour/intro_to_it_a3">
            <p className="toolsLink">
              https://github.com/spotifour/intro_to_it_a3
            </p>
          </a>
        </li>
      </ul>
      <h2 className="sectionTitle">Comments</h2>
      <div className="toolsText">
        {comment.map((para) => {
          return <p>{para}</p>;
        })}
      </div>
    </div>
  );
};

export default Tools;
