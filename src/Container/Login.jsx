import React, { useState } from "react";
import login from "../assets/login.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";

const Login = ({ handlePassword, showPassword }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
        submit: "",
    });

    const validateLogin = () => {
        let isValid = true;
        const errors = { email: "", password: "", submit: "" };

        if (!email) {
            errors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Enter a valid email address.";
            isValid = false;
        }

        if (!password) {
            errors.password = "Password is required.";
            isValid = false;
        }

        setErrorMessages(errors);

        if (isValid) {
            console.log("Login Successful", { email, password });
        }
    };

    return (
        <div className="main-container dis-row-center">
            <div className="login-container dis-row-even w-100">
                <div className="left dis-col-center">
                    <img src={login} alt="thinking_img" />
                </div>

                <div className="right dis-col-center">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            validateLogin();
                        }}
                        className="login_form">
                        <div className="first-row">
                            <h2 className="heading">Login</h2>
                            <p className="text-medium grey-text">Please enter your details below.</p>
                        </div>

                        <div className="first-row email">
                            <label htmlFor="email" className="input-label">
                                Email ID<span className="text-red">*</span>
                            </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="xyz12@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <span id="invalid-email" className="invalid-msg">
                                {errorMessages.email}
                            </span>
                        </div>

                        <div className="first-row password">
                            <label htmlFor="password" className="input-label">
                                Password<span className="text-red">*</span>
                            </label>
                            <br />
                            <span className="forshowpass">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i
                                    className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                    onClick={handlePassword}
                                    id="Show-password"
                                ></i>
                            </span>
                            <br />
                            <span id="invalid-password" className="invalid-msg">
                                {errorMessages.password}
                            </span>
                        </div>

                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                        <div>
                            <br />
                            <span id="invalid-msg-submit" className="invalid-msg">
                                {errorMessages.submit}
                            </span>
                        </div>

                        <div className="link-google dis-row-center">
                            <img src={google} alt="google-logo" />
                            <a href="">Sign up with Google</a>
                        </div>

                        <p className="link-account grey-text dis-row-center">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
