import './App.css'
import React, {useState} from "react";
import validator from "validator";

function App() {
  const [passwordMessage, setPasswordMessage] = useState("");
  const [color, setColor] = useState("");
  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumber: 1,
      minSymbols: 1
    })) {
      setPasswordMessage("Strong Password");
      setColor("green");
    }
    else {
      setPasswordMessage("Weak Password");
      setColor("red");
    }
  }

  return (
    <div style={{marginLeft: "200px"}}>
      <pre>
        <h2>Password Strength Check</h2>
        <span>Enter password: </span>
        <input type="text" onChange={event =>
          validate(event.target.value)}></input><br/>
        {passwordMessage === '' ? null :
          <span style={{
            fontWeight: "bold",
            color: color
          }}>{passwordMessage}</span>}
      </pre>
    </div>
  );
}

export default App
