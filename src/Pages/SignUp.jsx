import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import './SignUp.css';
import FormButton from "../Components/FormButton";
import MediaBar from "../Components/MediaBar";

const SignUp = () => {
    return (
        <div className="signupPage">
            <div className="signupForm"> 
                <form action="">
                    <h1 className="title">Welcome to AgroWize</h1>
                    <h3 className="subtitle">Let's Create Your Account</h3>
                    <div className="formLbl">
                        <label htmlFor="names" className="lbl">Full Name</label>
                        <input type="names" className="input" placeholder="Enter your full name" />
                    </div>
                    <div className="formLbl">
                        <label htmlFor="email" className="lbl">Enter your email address</label>
                        <input type="email" className="input" placeholder="example@gmail.com" />
                    </div>
                    <div className="formLbl">
                        <label htmlFor="password" className="lbl">Password</label>
                        <input type="password" className="input" placeholder="Create a secure password" />
                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </div>
                    <div className="formLbl">
                        <label htmlFor="password" className="lbl">Re-enter Password</label>
                        <input type="password" className="input" placeholder="Re-enter your password" />
                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </div>
                </form>
                <FormButton name="Create Account"/>
                <MediaBar
                    registerText="Or Register with"
                    loginText="Login"
                />
                </div>
        </div>
    )
}

export default SignUp;