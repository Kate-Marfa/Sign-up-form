import React, { useState } from "react";
import homeownerIcon from "./home-work.svg";
import professionalIcon from "./business-center.svg";
import arrowIcon from "./keyboard-arrow-right.png";

function RoleSelector() {
  const [selectorRole, setSelectorRole] = useState(null);

  const roles = [
    {
      id: "homeowner",
      title: "Homeowner",
      description: "I am a homeowner or interesed in home design.",
      icon: homeownerIcon,
    },
    {
      id: "professional",
      title: "Professional",
      description: "I offer home improvement services or sell home products.",
      icon: professionalIcon,
    },
  ];

  return (
    <div className="role-selector">
      <h2>Which describes you best?</h2>
      {roles.map((role) => (
        <div
          key={role.id}
          className={`role-card ${selectorRole === role.id ? "selected" : ""}`}
        >
          <img src={role.icon} alt="" className="role-icon" />
          <div>
            <strong>{role.title}</strong>
            <p>{role.description}</p>
          </div>
        </div>
      ))}
      <button className="next-button" disabled={!selectorRole}>
        Next
        <img src={arrowIcon} alt="" className="arrow" />
      </button>
    </div>
  );
}

export default RoleSelector;
