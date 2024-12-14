/* eslint-disable react/no-unknown-property */
import  { useState } from "react";
import "./header.css";
import logo from "../assets/logomark.png";
import profile from "../assets/profile.png";

import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      <div className="logo"><img src={logo} className="logoimg" alt="logo"/>LearnPro</div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="navList">
          <li>
            Explore <span><i class="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Learn <span><i class="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Chat <span><i class="fa-solid fa-angle-down"></i></span>
          </li>
          <li>
            Profile <span><i class="fa-solid fa-angle-down"></i></span>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="searchBar">
  <i className="fas fa-search searchIcon"></i> {/* FontAwesome search icon */}
  <i class="fa-solid fa-filter filterIcon"></i>  {/* FontAwesome filter icon */}
    <input type="text" placeholder="Search courses" />
</div>


      {/* Buttons */}
      <div className="buttons">
        <button className="downloadBtn">Download App</button>
        <div class="gray-bar"></div>

        <button className="logOutBtn">Log Out</button>
      </div>

      <a href="#"><img src={profile} className="profile" alt="profile"/></a>


      {/* Mobile Menu Toggle */}
      <div
        className="menuToggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
