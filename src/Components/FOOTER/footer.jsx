import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerLeft">
        <h2 className="footerLogo">
          <span>✳</span> LearnPro
        </h2>
        <div className="footerSocialIcons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerColumn">
          <h4>Explore</h4>
          <ul>
            <li>Learn</li>
            <li>Chat</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
