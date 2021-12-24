import React from "react";
import "./ProjectDescription.css";

import {
  projectOverview,
  projectDetail,
} from "../../constants/projectDescription";
import {convertTextDropdown} from '../../utilities';

const ProjectDescription = (props) => {

  const overviewSubsections = convertTextDropdown(projectOverview);
  const detailSubSections = convertTextDropdown(projectDetail);

  return (
    <div>
      <h1 className="sectionTitle">Project Description</h1>
      <h2 className="sectionTitle">Overview</h2>
      <div className="subsection">{overviewSubsections}</div>
      <h2 className="sectionTitle">Detailed Description</h2>
      <div className="subsection">{detailSubSections}</div>
    </div>
  );
};

export default ProjectDescription;
