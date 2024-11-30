import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
export default function Login() {
  const [inputUser, setInputUser] = useState("");
  const [inputPss, setInputPss] = useState("");
  const navigate = useNavigate();
  function handleChangeUser(e) {
    setInputUser(e.target.value);
  }
  function handleChangePss(e) {
    setInputPss(e.target.value);
  }
  function handleOnClick(e) {
    e.preventDefault();
    if (inputUser === "admin@123" || inputPss === "admin123") {
      console.log("user name and password match");
      navigate("/Users");
    } else {
      document.getElementById("wrongDetails").innerHTML = "Wrong details";
      console.log("wrong details");
    }
    console.log(`${inputUser} and ${inputPss}`);
  }

  return (
    <div className="login-div">
      <form>
        <h1 className="login-head">Login</h1>
        <input
          className="inputField"
          type="text"
          placeholder="Username"
          value={inputUser}
          onChange={handleChangeUser}
        />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          value={inputPss}
          onChange={handleChangePss}
        />
        <button onClick={handleOnClick} className="Login-button">
          Login
        </button>
        <h3 id="wrongDetails"></h3>
      </form>
    </div>
  );
}
