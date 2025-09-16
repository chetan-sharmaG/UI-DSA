import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <span className="hashed">Hashed</span>
      <span className="in">in</span>
      <span className="by"> by </span>
      <span className="deloitte">Deloitte</span>
    </div>
    <nav className="header__nav">
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#industry-clouds">Industry Clouds</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#insights">Insights</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
