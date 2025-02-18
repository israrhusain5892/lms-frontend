 
import { useState } from "react"; 
import "./header.css";
import logo from "../../assets/images/logomark.png"; 
import profile from "../../assets/images/profile.png";
import { FiSearch, FiMoreVertical } from "react-icons/fi";import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing FontAwesome icons for use in the navigation
import { Navigate, useNavigate } from "react-router-dom";

// Defining the Header component
const Header = () => {
  // State to manage the mobile menu toggle
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const goToCourse=()=>{
    navigate("/Clips")
  }

  return (
    <header className="headerContainer relative"> {/* Main header container */}
      
      {/* Mobile Menu Toggle Button */}
      <div
        className="headerMenuToggle"
        onClick={() => setMenuOpen(!menuOpen)} // Toggles the menuOpen state on click
      >
        <i className="fa-solid fa-bars text-[#00000095]"></i> {/* FontAwesome hamburger icon */}
      </div>
      {/* Logo Section */}
      <div className="headerLogo">
        <img src={logo} className="headerLogoImg" alt="logo" /> {/* Logo image */}
        LearnPro {/* Brand name */}
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-8  text-[#00000095] absolute right-5 md:hidden">
            <FiSearch className="text-2xl cursor-pointer" />
            <FiMoreVertical className="text-2xl cursor-pointer" />
          </div>

      {/* Navigation Links Section */}
      <nav className={`headerNav ${menuOpen ? "open" : ""}`}> {/* Adds "open" class if the menu is toggled */}
        <ul className="headerNavList"> {/* Unordered list for navigation links */}
          <li>
            Explore <span><i className="fa-solid fa-angle-down"></i></span> 
          </li>
          <li onClick={goToCourse}>
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

      {/* Search Bar Section */}
      <div className="headerSearchBar">
        <i className="fas fa-search headerSearchIcon"></i> {/* FontAwesome search icon */}
        <i className="fa-solid fa-filter headerFilterIcon"></i> {/* FontAwesome filter icon */}
        <input 
          type="text" 
          placeholder="Search courses" 
          className="headerSearchBarInput" 
        /> {/* Search input field */}
      </div>

      {/* Button Section */}
      <div className="headerButtons">
        <button className="headerDownloadBtn">Download App</button> {/* Download button */}
        <div className="headerGrayBar"></div> {/* Divider between buttons */}
        <button className="headerLogOutBtn">Log Out</button> {/* Log Out button */}
      </div>

      {/* Profile Image */}
      <a href="#">
        <img src={profile} className="headerProfile" alt="profile" /> {/* Profile picture */}
      </a>

    </header>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application