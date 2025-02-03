/* eslint-disable no-unused-vars */
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import './footer.css';
const Footer = () => {
  return (
    <footer className="bg-[ #FBFCFE] px-6 py-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Section - Logo and Social Icons */}
        <div className="lg:mb-20 mb-12 sm:block hidden ">
          <h2 className="text-head hidden sm:block">LEARN PRO</h2>
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
            <IoLogoFacebook className="text-[#142E159E]"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
              <FaInstagram className="text-[#142E159E]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">
            <FaXTwitter className="text-[#142E159E]" />
            </a>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 ">
          <div>
            <h3 className="sub">Customer Service</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline link">Contact Us</a></li>
              <li><a href="#" className="hover:underline link">FAQ</a></li>
              <li><a href="#" className="hover:underline link">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline link">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline link">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="sub">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline link">Learn</a></li>
              <li><a href="#" className="hover:underline link">Chat</a></li>
              <li><a href="#" className="hover:underline link">Profile</a></li>
              <li><a href="#" className="hover:underline link">About Us</a></li>
            </ul>
          </div>
          <h2 className="text-head sm:hidden">LEARN PRO</h2>

        </div>
        
      </div>
      <div className="lg:mb-20 mb-12 sm:hidden ">
          
          <div className="flex space-x-3 mt-2 justify-center items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
            <IoLogoFacebook className="text-[#142E159E]"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
              <FaInstagram className="text-[#142E159E]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">
            <FaXTwitter className="text-[#142E159E]" />
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;