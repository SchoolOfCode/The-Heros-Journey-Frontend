function Click({ text, style, handleClick }) {
  return (
    <button
      className="to-be-clicked"
      style={style}
      onClick={() => {
        handleClick(text);
      }}
    >
      {text}
    </button>
  );
}

export default Click;
