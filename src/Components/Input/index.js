function Input({ handleChange, placeholder }) {
  return (
    <input type="text" onChange={handleChange} placeholder={placeholder} />
  );
}

export default Input;
