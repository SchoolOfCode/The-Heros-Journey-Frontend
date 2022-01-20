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
      <h1 style={{ fontColor: "white", margin: "20px" }}>{title}</h1>
      <p style={{ fontColor: "black", textAlign: "left" }}>{description}</p>

      <p
        style={{
          fontStyle: "italic",
          textAlign: "left",
          position: "relative",
          top: "300px",
          overflow: "scroll",
        }}
      >
        {stageDesc}
      </p>
    </nav>
  );
}

export default SideNav;
