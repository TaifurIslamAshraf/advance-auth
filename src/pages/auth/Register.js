import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/cards/Card";
import styles from "./auth.module.scss";

import { BsCheck2All } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";

import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const [uCase, setUcase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSchar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes size={15} color="red" />;
  const checkIcon = <BsCheck2All size={15} color="green" />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUcase(true);
    } else {
      setUcase(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // Check For Special char
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSchar(true);
    } else {
      setSchar(false);
    }

    // Check For password length
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

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
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form action="" onSubmit={loginUser}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              value={name}
              onChange={handleInputChange}
            />
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
            <PasswordInput
              name="password2"
              placeholder="Confirm Password"
              value={password2}
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

            {/* password Strength */}
            <Card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(uCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(num)}
                    &nbsp; Number(0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(sChar)}
                    &nbsp; Special character (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passLength)}
                    &nbsp; At least 6 character
                  </span>
                </li>
              </ul>
            </Card>

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to="/Login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
