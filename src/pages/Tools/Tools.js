import React from "react";
import "./Tools.css";

import { comment } from "../../constants/tools";

const Tools = (props) => {
  return (
    <div>
      <h1 className="sectionTitle">Tools</h1>
      <h2 className="sectionTitle">Links</h2>
      <ul>
        <li className="toolsLink">
          <span>Website's link:</span>
          <span>
            <a className="toolsUrl" href="/">
                https://spotifour.github.io/intro_to_it_a3/
            </a>
          </span>
        </li>
        <li className="toolsLink">
          Website's GitHub repository:
          <a className="toolsUrl" href="https://github.com/spotifour/intro_to_it_a3">
              https://github.com/spotifour/intro_to_it_a3
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
