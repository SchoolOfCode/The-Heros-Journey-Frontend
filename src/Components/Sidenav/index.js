import React, { useState } from "react";
import "./style.css";

function SideNav({ title, description, stageDesc }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <h1 style={{ fontColor: "white", margin: "20px" }}>{title}</h1>
      <p style={{ fontColor: "black", fontSize: "1em", textAlign: "left" }}>
        {description}
      </p>
      <p
        style={{
          position: "fixed",
          bottom: "5vh",
          fontStyle: "italic",
          textAlign: "left",
        }}
      >
        {stageDesc}
      </p>
    </nav>
  );
}

export default SideNav;
