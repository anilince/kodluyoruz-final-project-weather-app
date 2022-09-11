import React, { useState } from "react";
import "../Login/Login.scss";

const Login = () => {

  const [userName, setUserName] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const [userPassword, setUserPassword] = useState("");
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const user = {
    name: userName,
    password: userPassword
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userName === "admin" && userPassword === "admin") {
      localStorage.setItem("user", JSON.stringify(user))
      document.location.reload(true)
    } else {
      window.confirm("Hatalı Giriş");
    }
  };
  
  return (
  <div className="login">
        <form className="loginForm">
        <label className="loginLabel">Username</label>
        <input
          type="text"
          name="name"
          className="loginInput"
          placeholder="username"
          value={userName}
          onChange={handleUserNameChange}
        />
        <label className="loginLabel">Password</label>
        <input
          type="password"
          name="password"
          className="loginInput"
          placeholder="password"
          value={userPassword}
          onChange={handleUserPassword}
        />
        <button className="loginButton" type="submit" onClick={handleSignIn}>
          Login
        </button>
      </form>   
  </div>
  );
};

export default Login;
