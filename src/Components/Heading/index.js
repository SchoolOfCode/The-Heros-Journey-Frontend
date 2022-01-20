import "./style.css";

function Heading({ text, style }) {
  return <h1 className="start" style={style}>{text}</h1>;
}

export default Heading;
