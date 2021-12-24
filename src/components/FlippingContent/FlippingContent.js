import React, { useRef } from "react";
import "./flippingContent.css";

import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlippingContent = (props) => {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      ref={ref}
    >
      <FrontSide>{props.front}</FrontSide>
      <BackSide>{props.back}</BackSide>
    </Flippy>
  );
};

export default FlippingContent;
