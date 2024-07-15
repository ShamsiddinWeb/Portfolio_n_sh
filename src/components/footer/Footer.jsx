import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-title">Shamsiddin Norov</span>
      <p>Copyright @2021. All Rights Reserved.</p>
      <div className="header-menu-contact">
        <Link className="header-menu-call" to="Tel:+998940337212">
          <FaPhoneAlt />
        </Link>
        <Link className="header-menu-telegram" to="https://t.me/shamsiddin_1101">
          <FaTelegramPlane />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
