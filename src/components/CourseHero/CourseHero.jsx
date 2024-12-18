/* eslint-disable react/no-unknown-property */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import heroimage from '../../assets/images/courseimage.png';
import './course-hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing FontAwesome icons for use in the navigation

const CourseHero = () => {
  return (
    <div className="courseHeroWrapper ">
      <div className="row align-items-center courseHeroCustomBg p-4">
        {/* Left Section */}
        <div className="col-md-6 courseHeroContent">
          <div className="mb-2">
            <span
              className="courseHeroBadge "
            >
              Web development
            </span>
          </div>
          <h2 className="courseHeroHeading fw-bold mb-3">
            Advanced Front-End Programming Techniques
          </h2>
          <div className="d-flex flex-wrap mb-3 courseHeroTextMuted">
            <div className="me-3">
              <i className="bi bi-clipboard-check-fill"></i> 39 Assignments
            </div>
            <div className="me-3">
              <i class="fa-solid fa-award"></i> Certificate of achievement
            </div>
            <div>
             <i class="fa-solid fa-infinity"></i> Lifetime access
            </div>
          </div>
          <p className="courseHeroTextMuted">
            Dive in and learn React.js from scratch! Learn React.js, Hooks,
            Redux, React Routing, Animations, Next.js and way more!
          </p>
          <div className="d-flex align-items-center mb-4 text-muted">
            <span className="courseHeroRating me-2 fs-5">
              <i className="bi bi-star-fill"></i> 
            </span>4.5 (2k+) 
            <span className="courseHeroLastUpdated ms-4 ">
              <i className="bi bi-calendar3"></i> Last Updated on 23 May, 2023
            </span>
          </div>
          <div className="d-flex">
            <button className="courseHeroBtnPrimary btn btn-primary me-3 ">Enroll Now</button>
            <button className="courseHeroBtnOutline btn btn-outline-primary ">Contact Us</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex justify-content-center cardPart">
          <div className="card  border-0 courseHeroCard">
            <img
              src={heroimage} /* Replace with the actual image path */
              alt="React Course"
              className="card-img-top courseHeroCardImage"
            />

           <div
              className="badge  text-black position-absolute" >
              2023
            </div>
            <div className="card-body text-start ">
              <h5 className="fw-bold">The Full Stack <br/> React Course</h5>
              <p className="mb-0 lh-lg">
                Build & Deploy E-Learning App <br />
                <span className="fw-bold ">From Zero to Hero</span>
              </p>
              <p className="small mt-2">
                The Advanced Front-End Programming course <br/> sharpens students
                critical thinking, creativity, <br/> and analytical skills.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
