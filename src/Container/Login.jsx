import React, { useState,useEffect } from "react";
import login from "../assets/login.png";
import google from "../assets/google.png";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../store/user/userAction";
import { useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setpassword] = useState("");
   const [eyeToggle, setEyeToggle] = useState(false);

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUserRequest())
  }, [dispatch])
  console.log(users)

  const validateLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please enter all the details");
      return;
    }
    const userFound = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );
    if (userFound) {
      navigate("/Dashboard")
      localStorage.setItem("userLoggedIn", JSON.stringify(userFound))
      return;
    }
    else {
      alert("Incorrect email and password")
      return
    }
  };

  return (
    <section id="container">
      <div className="logo">
        <img src={login} alt="brain" />
      </div>

      <div className="login-container">
        <h1>Login</h1>
        <p>Please enter your details below.</p>

        <form onSubmit={validateLogin}>
          <div className="email">
            <label>
              Email ID<span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="emailInput"
              value={loginEmail}
              type="text"
              placeholder="xyz14@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label>
              Password<span style={{ color: "red" }}>*</span>
            </label>
            {eyeToggle ? (
              <FaEye className="icon" onClick={() => setEyeToggle(false)} />
            ) : (
              <FaEyeSlash className="icon" onClick={() => setEyeToggle(true)} />
            )}
          
            <input
              id="password"
              value={loginPassword}
              onChange={(e) => setpassword(e.target.value)}
              className="passwordInput"
              type={eyeToggle ? "text" : "password"}
              placeholder="Password"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </form>

        <div className="sign-up-with-google">
          <img src={google} alt="google-logo" />
          <p>Sign up with Google</p>
        </div>

        <div className="create-account">
          <p>Don't have an account?</p>
          <a href="signup.html">Sign up?</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
