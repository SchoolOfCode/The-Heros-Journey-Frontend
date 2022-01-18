function Button({ text, handleClick, style }) {
  return (
    <button style={style} onClick={handleClick}>
      {text}
    </button>
  );
}
export default Button;
