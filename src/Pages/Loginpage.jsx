
import { Carousel } from "react-responsive-carousel";
import './loginpage.css';
import loginImage from '../assets/illustration 03.png';
import accessImage from '../assets/illustration 01.png';
import accessImage2 from '../assets/illustration_2.png'


const AssignmentCarousel = () => {
  return (
    <div className="loginpageContainer">
      <div className="loginLeft">
        
            
            <Carousel
        showThumbs={false}
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
            src= {accessImage2} 
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