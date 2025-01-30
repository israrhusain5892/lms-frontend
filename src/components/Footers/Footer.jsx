import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d0ddf72c] px-6 py-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section - Logo and Social Icons */}
        <div className="lg:mb-20 mb-12 ">
          <h2 className="text-lg font-semibold text-blue-600">LEARN PRO</h2>
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">
              <FaTimes />
            </a>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900">Customer Service</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Learn</a></li>
              <li><a href="#" className="hover:underline">Chat</a></li>
              <li><a href="#" className="hover:underline">Profile</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
