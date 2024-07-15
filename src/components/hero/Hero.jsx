import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2>
          Hello, I'm <br />
          <span> Shamsiddin Norov </span>
        </h2>
        <div className="animated-text">
          <h3>Web Developer</h3>
          <h3>Web Developer</h3>
          <h3>Web Developer</h3>
        </div>
        <Link to="indexx.html" className="btn">
          See My Work
        </Link>
        <div className="media-icons">
          <Link to="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
