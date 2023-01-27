import React from "react";

import "./home.scss";

import LoginImg from "../../assets/login.svg";

const Home = () => {
  return (
    <div>
      <section className="container hero">
        <div className="hero-text">
          <h2>Ultimate MERN stack Authentication System</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            ipsa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem
            repellat corrupti laudantium dolores veniam cumque! Provident quidem
            magni id?
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={LoginImg} alt="Auth" />
        </div>
      </section>
    </div>
  );
};

export default Home;
