
import React, {useState} from 'react'
import "./Mainheader.css"
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [shrink, setShrink] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <header  className={`header ${shrink ? "shrink" : ""}`}>
      <Link to="/" className="brand">N.SH.K</Link>
      <div className="menu-btn"><i className="fas fa-times menu-icon"></i></div>
      <div className="navigation">
        <Link to="#main">home</Link>
        <Link to="#about">about</Link>
        <Link to="#skills">skills</Link>
        <Link to="#services">services</Link>
        <Link to="#work">work</Link>
        <Link to="#contact">contact</Link>
      </div>
    </header>
  )
}

export default MainHeader