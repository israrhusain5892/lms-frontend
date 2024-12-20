import React, { useState } from 'react';
import './side-bar.css';
import { IoIosArrowForward } from "react-icons/io";



function SideBar() {

    const[activeLink,setActiveLink]=useState('Clips');
const links=[
    {
        name:'Clips'
    },
    {
        name:'Reading'
    },
    {
        name:'Task'
    },
    {
        name:'Tests'
    },
    {
        name:'Announcements'
    }
]
    return (
        <div>
            <div className="sideBarContainer">
                  <div className='header'>
                       <h4 className='heading'>Data Structure & Algorithms</h4>
                  </div>
                  <div className='linksContainer'>
                    {
                         links?.map((link,index)=>{
                           return <div onClick={()=>setActiveLink(link.name)}   className={` ${activeLink===link.name ? 'active':''} links`}>
                            <p className='link'>{link.name}</p>
                            <IoIosArrowForward className='icon' />
                      </div>
                         })
                    }
                   
                        
                       
                  </div>
            </div>
        </div>
    );
}

export default SideBar;