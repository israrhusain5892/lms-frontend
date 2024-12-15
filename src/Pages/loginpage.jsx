import React from "react";
import { Carousel } from "react-responsive-carousel";
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.png';
import accessImage from '../assets/access.png';
import accessImage2 from '../assets/access2.png';

const AssignmentCarousel = () => {
  const navigate = useNavigate();

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
              src={accessImage}
              alt="Access your class material"
              className="mb-3"
              style={{ width: "411px", height: "356px" }}
            />
            <div className="loginPara">
              <h2>Access your class material</h2>
              <p>Free class material for you to find your way to learning</p>
            </div>
          </div>
          <div className="loginDesc">
            <img
              src={accessImage2}
              alt="Access materials"
              className="mb-3"
              style={{ width: "349px", height: "316px" }}
            />
            <br/>
            <br/>
            <div className="loginPara">
              <h2>Receive announcements</h2>
              <p>Easy and fast announcements to
              always keep you updated</p>
            </div>
          </div>
          <div className="loginDesc">
            <img
              src={loginImage}
              alt="Track progress"
              className="mb-3"
              style={{ width: "411px", height: "356px" }}
            />
            <div className="loginPara">
              <h2>Submit your assignments</h2>
              <p>Submit your assignments on time, xyz
              make study more motivated</p>
            </div>
            <div className="loginButton">
              <button>Login</button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="loginRight">
        <a href="#" className="" onClick={() => navigate('/next-page')}>
          Skip
        </a>
      </div>
    </div>
  );
};

export default AssignmentCarousel;
