import React from "react";
import "./footer.css";

import { sections } from "../../constants/other";

const Footer = (props) => {
  const footerItems = sections.map((section) => {
    return (
      <a className="footerLink" href={section.path}>
        {section.name}
      </a>
    );
  });
  return (
    <div className="footer">
      <div className="footerLinks">{footerItems}</div>
      <p className="copyright">© Copyright 2021 spotifour</p>
    </div>
  );
};

export default Footer;
