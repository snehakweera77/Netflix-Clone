import React, { useRef, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="register__header">
        <img
          className="register__header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="register__header__signIn__button">Sign In</button>
      </div>
      <div className="register__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="register__container__input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button
              className="register__container__registerButton"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="register__container__input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button
              className="register__container__registerButton"
              onClick={handleFinish}
            >
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
