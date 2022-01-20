import "./style.css";

function Popup ({ boxStyle, closeBoxStyle, handleClose, content }) {
  return (
    <div className="popup-box" style={boxStyle}>
      <div className="box">
      {content}
        <span
          style={closeBoxStyle}
          className="close-icon"
          onClick={handleClose}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default Popup;
