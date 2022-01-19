import React, { useState } from "react";
import "./style.css";

function SideNav({ text }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <p>{text}</p>
    </nav>
  );
}

export default SideNav;
