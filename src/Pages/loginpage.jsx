import React from "react";
import { Carousel } from "react-responsive-carousel";
import './loginpage.css';
import loginImage from '../assets/login.png';
import accessImage from '../assets/access.png';
import accessImage2 from '../assets/access2.png'


const AssignmentCarousel = () => {
  return (
    <div className="loginpageContainer">
      <div className="loginLeft">
        
            
            <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={5000}
        className="w-50"
        showIndicators={true}

      >


 <div className="loginDesc">
          <img
            src= {accessImage} 
            alt="Submit your assignments"
             className="mb-3"
            style={{ width: "411px", height: "356px" }}
          />
         <div className="loginPara"> 
            <h2 >Receive announcements</h2>
         <p>Easy and fast announcements to
         always keep you updated</p></div>
        </div>

      
        <div className="loginDesc">
          <img
            src= {accessImage} 
            alt="Submit your assignments"
             className="mb-3"
            style={{ width: "411px", height: "356px" }}
          />
         <div className="loginPara"> 
            
            <h2 >Receive announcements</h2>
         <p>Easy and fast announcements to
         always keep you updated</p></div>
        </div>

       
        <div className="loginDesc">
          <img
            src={loginImage}  
            alt="Track Progress"
            className="mb-3"
            style={{  width: "411px", height: "356px"  }}
          />
          <div className="loginPara">
            <h2 >Track your progress</h2>
          <p>Stay organized and achieve your learning goals faster.</p>
          
          </div>
          <div className="loginButton">
                <button>login</button>

            </div>
        </div>
        

      </Carousel>

            </div>
            
           
       
      

      

      <div className="loginRight">
        
       
          <a href="#" className="">Skip</a>
        
      </div>
    </div>
  );
};

export default AssignmentCarousel;
