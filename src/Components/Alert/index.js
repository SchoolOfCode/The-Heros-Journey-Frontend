import "./style.css";

function Alert({ handleClose, content, style }) {
  return (
    <div className="alert">
      <div className="alert-box" style={style}>
        <span className="close-alert" onClick={handleClose}>x</span>
        {content}
      </div>
    </div>
  );
};
 
export default Alert;