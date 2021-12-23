import React from "react";
import "./Homepage.css";

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { HomepageContent } from "../../constants/other";

const Homepage = (props) => {
  const cards = HomepageContent.map((item) => {
    const head = (
      <>
        {item.icon}
        <h4>{item.section}</h4>
      </>
    );
    const body = (
      <>
        <p>{item.description}</p>
        <a href={item.url}>
          <Button style={{ width: "100%", }}>Read more</Button>
        </a>
      </>
    );
    return <Card head={head} body={body} />;
  });
  return (
    <div className="homepage">
      <Banner />
      <div className="homepageMain">{cards}</div>
    </div>
  );
};

export default Homepage;
