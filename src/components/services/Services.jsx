import React from "react";
import "./Services.css";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaCentercode } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io5";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="title reveal">
        <div className="section-title">My Services</div>
        <p className="services__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          molestias accusamus modi molestiae praesentium ipsam doloribus
          repudiandae, reiciendis nesciunt consectetur distinctio dignissimos,
          vel suscipit ipsum consequatur adipisci sed sint provident?
        </p>
      </div>
      <div className="content">
        <div className="card reveal">
          <div className="service-icon">
            <FaCentercode />
          </div>
          <div className="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card reveal">
          <div className="service-icon">
            <BsFillFileEarmarkCodeFill />
          </div>
          <div className="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card reveal">
          <div className="service-icon">
          <IoLogoCodepen />
          </div>
          <div className="info">
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
