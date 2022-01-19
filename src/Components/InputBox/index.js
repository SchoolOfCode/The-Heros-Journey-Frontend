function InputBox({ placeholder }) {
  return ( <input 
    placeholder={placeholder}
    style={{
      backgroundColor: `white`,
      textAlign: `center`,
      boxShadow: `2px 2px 4px rgba(47, 47, 47, 0.29)`,
      borderRadius: `30px`,
      borderStyle: `none`,
      margin: `20px`,
      padding: `12px 50px`,
      fontSize: `20px` }}></input>
  );
}

export default InputBox;
