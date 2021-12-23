import React from "react";
import "./References.css";

import { refs } from "../../constants/references";

const References = (props) => {
  return (
    <div>
      <h1 className="sectionTitle">References</h1>
      <div className="referencesMain">
        {refs.map((item) => {
          return (
            <>
              <div className="reference">
                <span className="referenceOrder">[{item.order}]</span>
                <span>
                  { ' - ' }
                  {item.name}
                </span>
                <div>
                  <a className='referenceLink' href={item.link}>{item.link}</a>
                </div>
                <span>{item.date}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default References;
