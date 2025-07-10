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
}

export default App
