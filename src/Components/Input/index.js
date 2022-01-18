function Input({ handleChange, placeholder, style }) {
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
      style={style}
    />
  );
}

export default Input;
