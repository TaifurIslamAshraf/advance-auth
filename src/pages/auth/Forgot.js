import React, { useState } from "react";

import Card from "../../components/cards/Card";
import styles from "./auth.module.scss";

import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = () => {};

  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

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

            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
