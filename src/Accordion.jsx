/** @format */

import { useState } from "react";
import chevronUp from "../assets/chevronUp.svg";
import chevronDown from "../assets/chevronDown.svg";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img className="chevron" src={chevronUp}></img>
          ) : (
            <img className="chevron" src={chevronDown}></img>
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
