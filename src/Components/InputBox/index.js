function InputBox({ placeholder, style, name, value, handleChange }) {
  return (
    <input
      onChange={handleChange}
      name={name}
      value={value}
      placeholder={placeholder}
      style={style}
    ></input>
  );
}

export default InputBox;
