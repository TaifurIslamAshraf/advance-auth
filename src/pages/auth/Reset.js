import React, { useState } from "react";

import Card from "../../components/cards/Card";
import styles from "./auth.module.scss";

import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form action="" onSubmit={loginUser}>
            <PasswordInput
              name="password"
              placeholder="New Password"
              value={password}
              onChange={handleInputChange}
            />

            <PasswordInput
              name="password2"
              placeholder="Confirm New Password"
              value={password2}
              onChange={handleInputChange}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
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

export default Reset;
