import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import './carousel.css';
import loginImage from '../../assets/login.png';
import accessImage from '../../assets/access.png';
import { useRef } from "react";


const AssignmentCarousel = () => {
  // Function to render custom indicators

  const carouselRef = useRef(null); // Create a ref for the Carousel
  const[count,setCount]=useState(1);

  const handleSkip = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1); // Move to the next
      setCount(count+1)
    }
  };
  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const style = {
      margin: "0 8px",
      cursor: "pointer",
      width: isSelected ?"24px":"10px",
      height:isSelected ?"8px":"10px",
      borderRadius: isSelected? "20%":"50%",
      backgroundColor: isSelected ? "#007bff" : "#bbb",
      border: isSelected ? "2px solid #007bff" : "2px solid #ccc",
      display: "inline-block",
    };

    return (
      <span
        style={style}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        aria-label={`Go to slide ${label}`}
      />
    );
  };

  return (
    <div className="loginpageContainer">
      <div className="loginLeft">
        <Carousel
          showThumbs={false}
          ref={carouselRef} // Attach the ref to the Carousel
          // showThumbs={false}
          // infiniteLoop
          // autoPlay
          showStatus={false}
          interval={6000}
          className="w-50"
          showIndicators={true}
          showArrows={true}
          renderIndicator={renderCustomIndicator} // Use the custom indicator function
        >
          <div className="loginDesc">
            <img
              src={accessImage}
              alt="Submit your assignments"
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
              src={accessImage}
              alt="Submit your assignments"
              className="mb-3"
              style={{ width: "411px", height: "356px" }}
            />
            <div className="loginPara">
              <h2>Receive announcements</h2>
              <p>Easy and fast announcements to always keep you updated</p>
            </div>
          </div>

          <div className="loginDesc">
            <img
              src={loginImage}
              alt="Track Progress"
              className="mb-3"
              style={{ width: "411px", height: "356px" }}
            />
            <div className="loginPara">
              <h2>Track your progress</h2>
              <p>Stay organized and achieve your learning goals faster.</p>
            </div>
            <div className="loginButton">
              <button>Login</button>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="loginRight">
        {
          count===3 ?  <a href="#hrefdfd" className="skip-btn" >
          Skip
        </a> :  <a href="#" className="skip-btn" onClick={handleSkip}>
          Skip
        </a>
        }
       
        
      </div>
    </div>
  );
};

export default AssignmentCarousel;
