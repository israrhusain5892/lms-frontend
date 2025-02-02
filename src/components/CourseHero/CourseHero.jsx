/* eslint-disable react/no-unknown-property */
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import heroimage from '../../assets/images/courseimage.png';
import { PiCertificate } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { GoInfinity } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { TbCalendarMonth } from "react-icons/tb";
import { TiStar } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
import './course-hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing FontAwesome icons for use in the navigation

const CourseHero = () => {
  return (
    <div className="courseHeroWrapper  ">
      <div className="d-flex align-items-center gap-4 courseHeroCustomBg  ">
        {/* Left Section */}
        <div className="courseHeroContent lh-sm ">
          <div className="mb-2">
            <span
              className="courseHeroBadge "
            >
              Web development
            </span>
          </div>
          <h2 className="courseHeroHeading mb-3">
            Advanced Front-End <br></br>Programming Techniques
          </h2>
          <div className="d-flex flex-wrap align-items-center mt-4 mb-3 gap-2 courseHeroTextMuted">
            <div className="me-3 d-flex gap-2 align-items-center courseHeroTextMuted">
            <MdOutlineAssignment className='courseHeroTextMuted fs-4' /> 39 Assignments
            </div>
            <div className="me-3 d-flex gap-2 align-items-center courseHeroTextMuted">
            <PiCertificate className='courseHeroTextMuted fs-4' /> Certificate of achievement
            </div>
            <div className='courseHeroTextMuted d-flex align-items-center gap-2' >
            <GoInfinity className="fs-4 courseHeroTextMuted " /> Life time access
            </div>
          </div>
          <p className="courseHeroTextMuted">
            Dive in and learn React.js from scratch! Learn React.js, Hooks,
            Redux, React<br></br> Routing, Animations, Next.js and way more!
          </p>

          <div className="d-flex align-items-center mb-3 gap-4  mt-3 ">
            <span className="text-price ">
              $599
            </span>
            <span className=" text-me">
             $1299
            </span>
            <span className="text-me ">80% off</span>
          </div>
          <div className="d-flex align-items-center mb-4 time-interval  ">
          <span className="d-flex align-items-center gap-2  time-interval">
          <IoTimeOutline className=' fs-4 time-interval' />only 1 Day left
            </span>
            </div>



          <div className="d-flex align-items-center mb-4 gap-4 text-time">
            <span className='d-flex align-items-center gap-2 text-time'>
            <TiStar className="fs-3 text-[#F97316]" />
           
           4.5 (2k+)
            </span>
            
            <span className="courseHeroLastU d-flex align-items-center gap-2 text-time">
            <TbCalendarMonth className='fs-4 text-time' />Last Updated on 23 May, 2023
            </span>
          </div>
          <div className="d-flex">
            <button className="courseHeroBtnPrime  btn btn-primary me-3 ">
              Enroll Now
            </button>
            <button className="courseHeroBtnOut  d-flex align-items-center gap-2">
            <FaWhatsappSquare className='fs-3 text-green-500' />  Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" d-flex justify-content-center cardPart">
          <div className="card  border-0 courseHeroCard">
            <img
              src={heroimage} /* Replace with the actual image path */
              alt="React Course"
              className="card-img-top courseHeroCardImage"
            />

            <div className="badge  text-black position-absolute">2023</div>
            <div className="card-body text-start ">
              <h5 className="fw-bold">
                The Full Stack <br /> React Course
              </h5>
              <p className="mb-0 lh-lg">
                Build & Deploy E-Learning App <br />
                <span className="fw-bold ">From Zero to Hero</span>
              </p>
              <p className="small mt-2">
                The Advanced Front-End Programming course <br /> sharpens
                students critical thinking, creativity, <br /> and analytical
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
