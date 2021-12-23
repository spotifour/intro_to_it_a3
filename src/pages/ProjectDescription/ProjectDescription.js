import React from "react";
import "./ProjectDescription.css";

import Dropdown from "../../components/Dropdown/Dropdown";
import {
  projectOverview,
  projectDetail,
} from "../../constants/projectDescription";

const convertText = (data) => {
  const detailSubSections = Object.keys(data).map((subsection) => {
    const title = subsection.replaceAll("_", " ");
    const content = data[subsection].map((para) => {
      if (Array.isArray(para)) {
        return (
          <ul>
            {para.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        );
      }
      return <p>{para}</p>;
    });
    return <Dropdown title={title} content={content} />;
  });
  return detailSubSections;
};

const ProjectDescription = (props) => {

  const overviewSubsections = convertText(projectOverview);
  const detailSubSections = convertText(projectDetail);

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
