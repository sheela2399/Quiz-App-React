import React, { useState } from "react";
import signUp from "../assets/signup.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";

const SignUp = ({handlePassword, showPassword}) => {

    const validateSignup = () => {
        console.log("Login Successful");
    };

    return (
        <div className="signup-container dis-row-even w-100">
            <div className="left dis-col-center">
                <img src={signUp} alt="thinking_img" />
            </div>

            <div className="right dis-col-center">
                <form
                    action=""
                    method=""
                    onSubmit={validateSignup}
                    className="login_form"
                    name="signupForm"
                    id="signupForm"
                >
                    <div className="first-row">
                        <h2 className="heading">Signup</h2>
                        <p className="text-medium grey-text">Sign Up to join</p>
                    </div>

                    <div className="first-row email">
                        <label htmlFor="fullName" className="input-label">
                            Full Name<span className="text-red">*</span>
                        </label>
                        <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
                        <span id="invalid-msg-fullname" className="invalid-msg"></span>
                    </div>

                    <div className="first-row email">
                        <label htmlFor="email" className="input-label">
                            Email ID<span className="text-red">*</span>
                        </label>
                        <input type="email" id="email" name="email" placeholder="xyz12@gmail.com" />
                        <span id="invalid-msg-email" className="invalid-msg"></span>
                    </div>

                    <div className="first-row password">
                        <label htmlFor="password" className="input-label">
                            Password<span className="text-red">*</span>
                        </label>
                        <span className="forshowpass">
                            <input type="password" id="password" name="password" placeholder="Password" />
                            <i
                                className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                onClick={handlePassword}
                                id="Show-password"
                            ></i>
                            </span>  
                        <span id="invalid-msg-password" className="invalid-msg"></span>
                    </div>

                    <div className="terms">
                        <span>
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">
                                I accept{" "}
                                <a href="#" className="text-blue">Terms & Conditions</a>
                            </label>
                        </span>
                    </div>

                    <button className="btn btn-primary" id="submit-button" type="Submit">
                        Signup
                    </button>

                    <div className="first-row">
                        <span id="invalid-msg-submit" className="invalid-msg"></span>
                    </div>

                    <div className="link-google dis-row-center">
                        <img src={google} alt="google-logo" />
                        <a href="">Sign up with Google</a>
                    </div>

                    <p className="link-account grey-text dis-row-center">
                        Have an account? <Link to="/login" className="text-blue">
                Login
              </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
