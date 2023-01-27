import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/cards/Card";
import styles from "./auth.module.scss";

import { BiLogIn } from "react-icons/bi";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = () => {};

  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login with google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>
          <form action="" onSubmit={loginUser}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            {/* <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleInputChange}
            /> */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
