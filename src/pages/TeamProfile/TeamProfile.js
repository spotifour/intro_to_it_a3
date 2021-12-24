import React from "react";
import "./TeamProfile.css";

import FlippingContent from "../../components/FlippingContent/FlippingContent";
import { members, teamInfo } from "../../constants/teamProfile";
import { convertTextContainer } from "../../utilities";

const TeamProfile = (props) => {
  const teamMembers = members.map((member) => {
    const back = (
      <div className="memberNameContainer">
        <h3>{member.name}</h3>
      </div>
    );
    const front = (
      <img className="memberImage" src={member.image} alt={member.name} />
    );
    return <FlippingContent front={front} back={back} />;
  });
  const teamProfileMain = convertTextContainer(teamInfo);
  return (
    <div>
      <h1 className="sectionTitle">Team Profile</h1>
      <h2 className="sectionTitle">Team Members</h2>
      <div className="memberImages">{teamMembers}</div>
      <h2 className="sectionTitle">Team information</h2>
      <div className="teamProfileMain">{teamProfileMain}</div>
    </div>
  );
};

export default TeamProfile;
