import React from "react";
import { useState } from "react";
import "./LoginForm.css"
import MediaBar from "../MediaBar";
import FormButton from "../FormButton";

const LoginForm = ({onFormSubmit}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
   if (validateForm()) {
    onFormSubmit({ username, password });
   }
  };
   const validateForm = () => {
     if (!username || !password) {
       setError("Please fill out all fields.");
       return false;
     }
     // You can add more validation logic here if needed
     return true;
   };
  return (
    <div className="container">
      <form className="login-form" onFormSubmit={handleSubmit}>
        <div className="welcomeBack">
          <h3>Welcome Back</h3>
          <p className="welcomeMsg">Glad to see you again!</p>
        </div>
        <div className="formContainer">
          <label htmlFor="username">Enter your email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error && !username ? "error" : ""}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error && !password ? "error" : ""}
            required
          />
          <span className="error">{error}</span>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <FormButton name="Login" />
        <MediaBar registerText="Or Login with" loginText="Login" />
      </form>
    </div>
  );
};
export default LoginForm;
