/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./header.css";
import logo from "../assets/logomark.png";
import profile from "../assets/profile.png";

import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headerContainer">
      
      <div className="headerLogo">
        <img src={logo} className="headerLogoImg" alt="logo" />LearnPro
      </div>

      {/* Navigation Links */}
      <nav className={`headerNav ${menuOpen ? "open" : ""}`}>
        <ul className="headerNavList">
          <li>
            Explore <span><i className="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Learn <span><i className="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Chat <span><i className="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Profile <span><i className="fa-solid fa-angle-down"></i></span>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="headerSearchBar">
        <i className="fas fa-search headerSearchIcon"></i> {/* FontAwesome search icon */}
        <i className="fa-solid fa-filter headerFilterIcon"></i>  {/* FontAwesome filter icon */}
        <input type="text" placeholder="Search courses" className="headerSearchBarInput" />
      </div>

      {/* Buttons */}
      <div className="headerButtons">
        <button className="headerDownloadBtn">Download App</button>
        <div className="headerGrayBar"></div>
        <button className="headerLogOutBtn">Log Out</button>
      </div>

      <a href="#"><img src={profile} className="headerProfile" alt="profile" /></a>

      {/* Mobile Menu Toggle */}
      <div
        className="headerMenuToggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
