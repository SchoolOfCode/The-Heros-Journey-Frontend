import React, { useState } from "react";
import "./style.css";

function SideNav({ title, description, stageDesc }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="menu-icon" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <h1>{title}</h1>
      <p className="about-stage">{description}</p>
      <p className="topics">{stageDesc}</p>
    </nav>
  );
}

export default SideNav;
