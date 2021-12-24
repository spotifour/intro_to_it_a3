import React from "react";
import "./GroupReflection.css";

import { reflectionInfo } from "../../constants/groupReflection";
import {convertTextContainer} from '../../utilities';

const GroupReflection = (props) => {
  const reflections = convertTextContainer(reflectionInfo);
  return (
    <div>
      <h1 className="sectionTitle">Group Reflection</h1>
      <div className="reflections">{reflections}</div>
    </div>
  );
};

export default GroupReflection;
