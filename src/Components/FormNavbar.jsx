import React from "react";
import "./FormNavbar.css";

const FormNavbar = () => {
  return (
    <nav className="formNavbar">
      <ul className="formNavbar-list">
        <li className="formNavbarLogo">
          <a href="/">
            <img
              className="formNavbarLogo"
              src="./AgroWizeLogo.png"
              alt="Logo"
            />
          </a>
        </li>
        <li className="formNavbar_CA">
          <a href="/create-account">
            <h3>Create Account</h3>
          </a>
        </li>
        <li className="formNavbarHome">
          <a href="/">HOME</a>
        </li>
      </ul>
    </nav>
  );
};

export default FormNavbar;
