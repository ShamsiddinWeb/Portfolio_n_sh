import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title reveal">
        <div className="section-title">Contact Me</div>
      </div>
      <div className="content">
        <div className="row">
          <div className="card click reveal">
            <div className="contact-icon box-active">
              <FaLocationDot />
            </div>
            <div className="info">
              <h3>Address</h3>
              <span>Tashkent City</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="info">
              <h3>Phone</h3>
              <a href="Tel:+998940337212">
                <span>+998940337212</span>
              </a>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <MdEmail />
            </div>
            <div className="info">
              <h3>Email Address</h3>
              <a href="https://t.me/shamsiddin_1101">
                <span className="hover">shamsiddinnorov734 @gmail.com</span>
              </a>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <FaGlobe />
            </div>
            <div className="info">
              <h3>Website</h3>
              <span>MyPortfolio.org</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-form reveal">
            <h3>Send Message</h3>
            <div className="input-box">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email"></input>
            </div>
            <div className="input-box">
              <textarea rows="8" cols="80" placeholder="Message"></textarea>
            </div>
            <div className="input-box">
              <input type="submit" className="send-btn" value="Send"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
