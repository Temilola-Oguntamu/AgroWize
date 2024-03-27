import React from "react";
import './ForgotPassword.css';
import FormButton from "../Components/FormButton";
import { Form } from "formik";

const ForgotPassword = () => {
    return (
        <div className="forgotPasswordPage">
            <div className="forgotPasswordForm">
                <form>
                    <h1 className="forgotPasswordTitle">Forgot Password</h1>
                    <h3 className="forgotPasswordSubtitle">Enter your account email below, and we'll send a reset link</h3>
                    <div className="forgotPasswordInput">
                        <label htmlFor="email" className="lbl">Enter your email address</label>
                        <input type="email" className="input"/>
                    </div>
                    <FormButton name="Continue" />
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;