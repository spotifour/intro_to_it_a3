import React, { useState } from "react";
import "./dropdown.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Dropdown = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdownHead" onClick={() => setOpenDropdown(!openDropdown)}>
        <h4>{props.title}</h4>
        <span>{openDropdown ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </div>
      {openDropdown ? (
        <div className="dropdownBody">
          {props.content}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
