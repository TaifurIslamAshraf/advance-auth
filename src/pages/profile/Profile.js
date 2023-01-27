import React, { useState } from "react";

import ProfilePhoto from "../../assets/avatarr.png";
import Card from "../../components/cards/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./Profile.scss";

const initialState = {
  name: "Taifur",
  email: "Taifurislam@gmail.com",
  profile: "",
  photo: "",
  role: "",
  phone: "",
  bio: "I am a full-stack web developer. ",
  isVerified: false,
};

const Profile = () => {
  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {};
  const handleInputChange = () => {};

  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="flex-start profile">
            <Card cardClass={"card"}>
              <div className="profile-photo">
                <div>
                  <img src={ProfilePhoto} alt="profilePhoto" />
                  <h3>Role: Admin</h3>
                </div>
              </div>
              <form action="">
                <p>
                  <label>Change Photo:</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    value={profile.photo}
                    accept="image/.*"
                    onChange={handleImageChange}
                  />
                </p>
                <p>
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Email: </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </p>
                <p>
                  <label>Email: </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Bio: </label>
                  <textarea
                    name="bio"
                    cols="30"
                    rows="10"
                    value={profile.bio}
                  ></textarea>
                </p>
                <button className="--btn --btn-primary --btn-block">
                  Update Profile
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
