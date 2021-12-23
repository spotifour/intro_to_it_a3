import React from "react";
import "./Main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import GroupReflection from "./pages/GroupReflection/GroupReflection";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription";
import References from "./pages/References/References";
import SkillsAndJobs from "./pages/SkillsAndJobs/SkillsAndJobs";
import TeamProfile from "./pages/TeamProfile/TeamProfile";
import Tools from "./pages/Tools/Tools";

const Main = (props) => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groupReflection" element={<GroupReflection />} />
          <Route path="/projectDescription" element={<ProjectDescription />} />
          <Route path="/references" element={<References />} />
          <Route path="/skillsAndJobs" element={<SkillsAndJobs />} />
          <Route path="/teamProfile" element={<TeamProfile />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
