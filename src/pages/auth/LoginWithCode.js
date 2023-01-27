import React, { useState } from "react";

import Card from "../../components/cards/Card";
import styles from "./auth.module.scss";

import { GrInsecure } from "react-icons/gr";
import { Link } from "react-router-dom";

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");

  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>

          <form action="" onSubmit={loginUser}>
            <input
              type="text"
              name="loginCode"
              id="loginCode"
              placeholder="Access Code"
              required
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value)}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Proceed To Login
            </button>
            <span className="--flex-center">
              Check Your Email for login access code
            </span>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p className="v-link --color-primary">
                <b>Resend Code</b>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginWithCode;
