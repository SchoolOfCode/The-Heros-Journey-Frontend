import "./style.css";

function Alert({ handleClose, content, style }) {
  return (
    <div className="alert">
      <div className="alert-box" style={style}>
      {content}
        <span className="close-alert" onClick={handleClose}>x</span>
      </div>
    </div>
  );
};
 
export default Alert;