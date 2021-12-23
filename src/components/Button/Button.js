import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button className="button" style={props.style}>
      {props.children}
    </button>
  );
};

export default Button;
