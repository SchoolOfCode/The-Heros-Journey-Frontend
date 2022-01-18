function Click({ text, style, handleClick }) {
  return (
    <button
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
