import React from "react";
import "./text.css";

const Text = (props) => {
  return (
    <div className="text">
      <div className="textLeft">
        {props.sections.map((section) => {
          return <a href={section.path}>{section.name}</a>;
        })}
      </div>
      <div className="textRight">{props.content}</div>
    </div>
  );
};

export default Text;
