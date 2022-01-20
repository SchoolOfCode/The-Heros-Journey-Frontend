import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box" style={props.boxStyle}>
      <div className="box">
        <span
          style={props.closeBoxStyle}
          className="close-icon"
          onClick={props.handleClose}
        >
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
