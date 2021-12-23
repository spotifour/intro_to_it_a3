import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardHead">
        <h3 className="cardHeadText">{props.head}</h3>
      </div>
      <div className="cardBody">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
