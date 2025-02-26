import { useState } from 'react';
import './side-bar.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate ,Link,useLocation} from 'react-router-dom';

function SideBar() {
    // const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state for mobile/tablet
    

    const links = [
        { name: 'Clips' },
        { name: 'Reading' },
        { name: 'Task' },
        { name: 'Tests' },
        { name: 'Announcements' }
    ];

    const location = useLocation(); // Get current route
    const navigate = useNavigate();  
  
    const handleLinkClick = (link) => {
      if (location.pathname === `/${link}`) return; // Prevent re-updating if already active
      navigate(`/${link}`); // Navigate to new route
    };

    return (
        <>
            {/* Menu Button (only visible on mobile & tablet) */}
            <button className="menu-btn flex  md:hidden justify-center items-center text-blue-600 " onClick={() => setIsOpen(true)}>
            <p className=''>Menu</p><IoMdMenu size={20} />
            </button>

            {/* Overlay effect when sidebar is open (only on mobile & tablet) */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div className={` mt-2 sideBarContainer ${isOpen ? 'open' : ''}`}>
                <div className='header'>
                    <h4 className='heading'>Data Structure & Algorithms</h4>
                    {/* Close Button for mobile & tablet */}
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                         <IoMdClose size={24} />
                    </button>
                </div>

                <div className='linksContainer'>
                    {links.map((link, index) => {
                          const isActive = location.pathname === `/${link.name}`
                         return<div
                            key={index} 
                            onClick={() => handleLinkClick(link.name)}
                            className={`links ${isActive ? "activeLinks" : ""}`}
                        >
                            <p  className={`links ${isActive ? "activeLinks" : ""}`}>{link.name}</p>
                            <IoIosArrowForward className='icon' />
                        </div>
                        
                       
})}
                </div>
            </div>
        </>
    );
}

export default SideBar;