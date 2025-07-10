import './App.css'
import React, {useState} from "react";
import validator from "validator";

function App() {
  const [passwordMessage, setPasswordMessage] = useState("");

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumber: 1,
      minSymbols: 1
    })) {
      setPasswordMessage("Strong Password");
    }
    else {
      setPasswordMessage("Weak Password");
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
            color: "red"
          }}>{passwordMessage}</span>}
      </pre>
    </div>
  );
}

export default App
