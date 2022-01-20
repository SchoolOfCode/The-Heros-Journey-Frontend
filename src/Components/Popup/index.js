function Popup ({ boxStyle, closeBoxStyle, handleClose, content }) {
  return (
    <div className="popup-box" style={boxStyle}>
      <div className="box">
        <span
          style={closeBoxStyle}
          className="close-icon"
          onClick={handleClose}
        >
          x
        </span>
        {content}
      </div>
    </div>
  );
};

export default Popup;
