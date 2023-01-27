import React, { useState } from "react";

import Card from "../../components/cards/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import "./ChangePassword.scss";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="flex-start change-password">
            <Card cardClass={"card"}>
              <form action="">
                <p>
                  <label>Current Password</label>
                  <PasswordInput
                    name="oldPassword"
                    placeholder="Current Password"
                    value={formData.oldPassword}
                    onChange={handleInputChange}
                  />
                </p>

                <p>
                  <label>New Password</label>
                  <PasswordInput
                    name="password"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Confirm New Password</label>

                  <PasswordInput
                    name="password2"
                    placeholder="Confirm New Password"
                    value={formData.password2}
                    onChange={handleInputChange}
                  />
                </p>
                <button className="--btn --btn-danger --btn-block">
                  Change Password
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
