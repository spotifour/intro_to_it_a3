import React from "react";
import "./SkillsAndJobs.css";

import { jobs } from "../../constants/skillsAndJobs";
import { convertTextContainer } from "../../utilities";

const SkillsAndJobs = (props) => {
  const jobInfo = convertTextContainer(jobs);
  return (
    <div>
      <h1 className="sectionTitle">Skills And Jobs</h1>
      <div className="jobsInfo">{jobInfo}</div>
    </div>
  );
};

export default SkillsAndJobs;
