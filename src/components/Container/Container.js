import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <div className="container">
      <div className="containerLeft">{props.left}</div>
      <div className="containerRight">{props.right}</div>
    </div>
  );
};

export default Container;
