/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMenu, FiGrid, FiUpload,FiChevronDown,FiFileText, FiBell, FiSettings, FiLogOut, FiClock } from "react-icons/fi";
import './adminsidebar.css';
import { MdOutlineAnalytics,MdOutlineManageAccounts   } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";


import logo from '../../assets/images/logomark.png';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <div className={`h-screen ${isOpen ? "w-76 md:w-[350px]" : "w-20"} ${isOpen ? "p-4 bg-white fixed 2xl:relative":"bg-[#f8fafc] relative"}  shadow-lg transition-all duration-300  top-0 left-0  sm:overflow-hidden overflow-scroll z-50`}>      
        <img src={logo} alt="adminpannel logo" className={`p-3 md:hidden ${!isOpen ? "block" : "hidden"}`}/>
      <div className="p-4 flex items-center md:justify-normal gap-3 justify-between">
        <img src={logo} alt="adminpannel logo" className="w-10 hidden md:block"/>
        <h1 className={`text-2xl font-extrabold text-[#2563EB] transition-all ${isOpen ? "block" : "hidden"}`}>LMS</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className="text-xl" />
        </button>
      </div>
      
        <p onClick={() => setIsOpen(!isOpen)} className="cursor-pointer px-2 md:px-1 2xl:px-2.5 text-[#64748B] font-semibold text-base">MENU</p>
      <nav className="mt-4 md:border-b-2 md:border-[#D0D5DD] ">
        <ul className="space-y-2">
          <NavItem icon={<FiGrid />} text="Dashboard" isOpen={isOpen} />
          <NavDropdown icon={<FiClock />} text="Account Management" isOpen={isOpen}>
            <NavItem icon={null} text="Staff Management" isOpen={isOpen} subItem />
            <NavItem icon={null} text="Student Management" isOpen={isOpen} subItem />
          </NavDropdown>
          <NavItem icon={<BsJournalBookmark  />} text="Course Management" isOpen={isOpen} />
          <NavItem icon={<MdOutlineManageAccounts  />} text="Manage Class" isOpen={isOpen} />
          <NavItem icon={<FiFileText />} text="Class / Batch Management" isOpen={isOpen} />
          <NavItem icon={<FiUpload />} text="Content Upload" isOpen={isOpen} />
          <NavItem icon={<FiBell />} text="Announcements" isOpen={isOpen} />
          <NavItem icon={<MdOutlineAnalytics />} text="Reports & Analytics" isOpen={isOpen} />
          <NavItem icon={<FiSettings />} text="Settings" isOpen={isOpen} />
        </ul>
      </nav>
      
      <div className={`absolute mt-3 md:mt-10 ${isOpen? "w-[266px] bg-[#f0f0f0] hover:bg-[#dfdddd]":""} rounded-md  h-[34px]  flex justify-center items-center`}>
      <NavItem icon={<FiLogOut />} text="Log out" isOpen={isOpen} noHover={true} />

      </div>
    </div>
  );
};

const NavItem = ({ icon, text, isOpen, subItem = false, noHover = false }) => (
    <li className={`flex items-center space-x-3 p-3 cursor-pointer ${subItem ? "pl-10" : "pl-4"} ${noHover ? "" : "hover:bg-[#dbe8fe]"}`}>
      {icon && <span className="text-xl">{icon}</span>}
      <span className={`text-base font-semibold ${isOpen ? "block" : "hidden"} transition-all text-[#191D23]`}>{text}</span>
    </li>
  );
  

const NavDropdown = ({ icon, text, children, isOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center space-x-3 p-3 hover:bg-[#dbe8fe] cursor-pointer pl-4" onClick={() => setOpen(!open)}>
      <div className="flex items-center space-x-3 font-semibold">
      <span className="text-xl">{icon}</span>
        <span className={`${isOpen ? "block " : "hidden"} transition-all`}>{text}</span>
      </div>
      <FiChevronDown className={`text-xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </div>
      {open && isOpen && <div className="bg-[#f8fafc]">{children}</div>}
    </div>
  );
};

export default Sidebar;
