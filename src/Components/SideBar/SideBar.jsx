import { useState } from 'react';
import './side-bar.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function SideBar() {
    const [activeLink, setActiveLink] = useState('Clips');
    const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state for mobile/tablet

    const links = [
        { name: 'Clips' },
        { name: 'Reading' },
        { name: 'Task' },
        { name: 'Tests' },
        { name: 'Announcements' }
    ];

    return (
        <>
            {/* Menu Button (only visible on mobile & tablet) */}
            <button className="menu-btn flex lg:hidden justify-center items-center text-blue-600" onClick={() => setIsOpen(true)}>
            <p className=''>Menu</p><IoMdMenu size={20} />
            </button>

            {/* Overlay effect when sidebar is open (only on mobile & tablet) */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div className={`sideBarContainer ${isOpen ? 'open' : ''}`}>
                <div className='header'>
                    <h4 className='heading'>Data Structure & Algorithms</h4>
                    {/* Close Button for mobile & tablet */}
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                         <IoMdClose size={24} />
                    </button>
                </div>

                <div className='linksContainer'>
                    {links.map((link, index) => (
                        <div 
                            key={index} 
                            onClick={() => setActiveLink(link.name)} 
                            className={`links ${activeLink === link.name ? 'active' : ''}`}
                        >
                            <p className='link'>{link.name}</p>
                            <IoIosArrowForward className='icon' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SideBar;
