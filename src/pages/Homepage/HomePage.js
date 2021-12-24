import React from "react";
import "./Homepage.css";

import Banner from "../../components/Banner/Banner";
import FlippingContent from "../../components/FlippingContent/FlippingContent";
import { sections } from "../../constants/other";

const Homepage = (props) => {
  const homepageContent = sections.map((section) => {
    const back = (
      <div className="sectionLinkContainer">
        <a className="homepageLink" href={section.path}>
          <p>Open</p>
        </a>
      </div>
    );
    const front = (
      <div className="homepageItem">
        <div className="homepageSection">
          <h2 className="homepageSectionName">{section.name}</h2>
          {section.icon}
        </div>
      </div>
    );
    return <FlippingContent front={front} back={back} />;
  });
  return (
    <div className="homepage">
      <Banner />
      <div className="homepageMain">{homepageContent}</div>
    </div>
  );
};

export default Homepage;
