function Input({ placeholder, style, name, value, handleChange }) {
  return (
    <input
      type="text"
      onChange={handleChange}
      name={name}
      value={value}
      placeholder={placeholder}
      style={style}
    ></input>
  );
}

export default Input;
